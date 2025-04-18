import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/teams'); 
        setTeams(res.data); 
      } catch (err) {
        console.error("Error fetching teams:", err);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp9536040.jpg')" }}
    >
      <Navbar />

      {/* Title */}
      <div className="flex justify-center mt-10">
        <img
          src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"
          alt="TATA IPL Teams"
          className="w-[200px] sm:w-[20px] md:w-[100px] lg:w-[200px] object-contain"
        />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {teams.map((team, index) => (
          <Link
            key={index}
            to={`/teams/${team.team_name.replace(/\s+/g, '-').toLowerCase()}`}
            className="bg-blue-950 bg-opacity-10 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all"
          >
            <div
              className="w-30 h-40 bg-cover bg-center rounded-md mb-3"
              style={{ backgroundImage: `url(${team.logo})` }}
            ></div>
            <h2 className="text-white font-bold text-center text-xl">{team.team_name}</h2>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
