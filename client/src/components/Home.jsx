import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const teams = [
  { name: "Chennai Super Kings", logo: "/images/csk.png" },
  { name: "Delhi Capitals", logo: "/images/dc.png" },
  { name: "Gujarat Titans", logo: "/images/gt.png" },
  { name: "Kolkata Knight Riders", logo: "/images/kkr.png" },
  { name: "Lucknow Super Giants", logo: "/images/lsg.png" },
  { name: "Mumbai Indians", logo: "/images/mi.png" },
  { name: "Punjab Kings", logo: "/images/pbks.png" },
  { name: "Rajasthan Royals", logo: "/images/rr.png" },
  { name: "Royal Challengers Bangalore", logo: "/images/rcb.png" },
  { name: "Sunrisers Hyderabad", logo: "/images/srh.png" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/ipl.jpg")' }}>
      {/* Navbar */}
      <Navbar/>

      {/* Title */}
      <div className="flex justify-center mt-10">
  <img 
    src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png" 
    alt="TATA IPL Teams" 
    className="w-[200px] sm:w-[20px] md:w-[100px] lg:w-[200px] object-contain"
  />
</div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {teams.map((team, index) => (
          <Link 
            key={index}
            to={`/teams/${team.name.replace(/\s+/g, '-').toLowerCase()}`} 
            className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all"
          >
            <div className="w-full h-48 bg-cover bg-center rounded-md mb-4" style={{ backgroundImage: `url(${team.logo})` }}></div>
            <h2 className="text-white font-semibold text-center text-xl">{team.name}</h2>
          </Link>
        ))}
      </div> 
      <Footer/> 
    </div>
   
  );
};

export default HomePage;
