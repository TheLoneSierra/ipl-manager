import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      alert("Signup successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full h-1/3 md:h-full">
        <img
          src="ipl.jpg" // change the path if needed
          alt="IPL Players"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 w-full bg-gray-900 text-white flex items-center justify-center p-4 md:p-8 h-2/3 md:h-full">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-700 text-white"
              required
            />

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 font-semibold"
            >
              Signup
            </button>

            <button
              type="button"
              className="w-full py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 font-semibold"
            >
              Signup with Google
            </button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/" className="text-red-400 hover:text-red-600">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
