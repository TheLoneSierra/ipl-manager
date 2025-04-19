require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// ---------- AUTH ROUTES ----------
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Incorrect password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
});

app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = jwt.sign({ userId: user._id }, 'reset_secret', { expiresIn: '15m' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com', // update this
        pass: 'your_app_password'     // use App Password, not actual password
      }
    });

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'IPL App Password Reset',
      html: `<p>Click <a href="http://localhost:5173/reset-password/${token}">here</a> to reset your password</p>`
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Reset link sent to email' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.post('/api/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, 'reset_secret');
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(decoded.userId, { password: hashedPassword });
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token', error });
  }
});

// ---------- EXISTING TEAM API ----------
const teamSchema = new mongoose.Schema({}, { strict: false });
const Team = mongoose.model('Team', teamSchema, 'teams');

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await Team.find({});
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teams', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
