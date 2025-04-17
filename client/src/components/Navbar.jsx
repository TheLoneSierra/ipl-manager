import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#0A1D56] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="https://documents.iplt20.com//ipl/assets/images/ipl-logo-new-old.png" alt="BCCI" className="h-10" />
        </div>
        <nav className="hidden md:flex gap-6 font-semibold">
          <a href="#" className="hover:text-yellow-400">MATCHES</a>
          <a href="#" className="hover:text-yellow-400">POINTS TABLE</a>
          <a href="#" className="hover:text-yellow-400">VIDEOS</a>
          <a href="#" className="hover:text-yellow-400 border-b-2 border-white">TEAMS</a>
          <a href="#" className="hover:text-yellow-400">NEWS</a>
          <a href="#" className="hover:text-yellow-400">FANTASY</a>
          <a href="#" className="hover:text-yellow-400">STATS</a>
          <a href="#" className="hover:text-yellow-400">MORE</a>
        </nav>
        <div className="flex gap-4 items-center">
          <img src="https://documents.iplt20.com//ipl/assets/images/fan-poll.webp" alt="Poll" className="h-6" />
          <img src="https://documents.iplt20.com//ipl/assets/images/viewers-choice.webp" alt="Choice" className="h-6" />
          <img src="https://documents.iplt20.com//ipl/assets/images/new-search-icon.svg" alt="Search" className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
