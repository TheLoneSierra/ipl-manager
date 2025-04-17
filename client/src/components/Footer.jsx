import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101820] text-white px-4 sm:px-8 md:px-16 py-10">
      {/* Top Sponsor Banner */}
      <div className="bg-[#0A1D44] rounded-lg py-6 px-4 grid md:grid-cols-6 gap-6 text-center text-xs font-semibold tracking-wide text-[#F5E0B5]">
        <div>
          <p className="text-[10px]">TITLE SPONSOR</p>
          <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.webp" alt="Tata" className="h-6 mx-auto mt-1" />
        </div>
        <div>
          <p className="text-[10px]">ASSOCIATE PARTNER</p>
          <div className="flex justify-center gap-2 mt-1">
            <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-my11circle-logo.webp" alt="My11Circle" className="h-6" />
            <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-angelone-logo.webp" alt="AngelOne" className="h-6" />
            <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-rupay-logo.webp" alt="RuPay" className="h-6" />
          </div>
        </div>
        <div>
          <p className="text-[10px]">OFFICIAL UMPIRE PARTNER</p>
          <img src="https://documents.iplt20.com//ipl/assets/images/new-partner-wonder-cement.webp" alt="Wonder Cement" className="h-6 mx-auto mt-1" />
        </div>
        <div>
          <p className="text-[10px]">OFFICIAL STRATEGIC TIMEOUT PARTNER</p>
          <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-ceat-logo.webp" alt="CEAT" className="h-6 mx-auto mt-1" />
        </div>
        <div>
          <p className="text-[10px]">OFFICIAL BROADCASTER</p>
          <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-start-sports-logo.webp" alt="Star Sports" className="h-6 mx-auto mt-1" />
        </div>
        <div>
          <p className="text-[10px]">OFFICIAL DIGITAL STREAMING PARTNER</p>
          <img src="https://documents.iplt20.com//ipl/assets/images/JioHotstar.webp" alt="JioHotstar" className="h-6 mx-auto mt-1" />
        </div>
      </div>

      {/* Footer Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm sm:text-base">
        {/* TEAM */}
        <div>
          <h2 className="font-semibold mb-4 text-[#FFFFFF]">TEAM</h2>
          <ul className="space-y-1 text-gray-400">
            <li>Chennai Super Kings</li>
            <li>Delhi Capitals</li>
            <li>Gujarat Titans</li>
            <li>Kolkata Knight Riders</li>
            <li>Lucknow Super Giants</li>
            <li>Mumbai Indians</li>
            <li>Punjab Kings</li>
            <li>Rajasthan Royals</li>
            <li>Royal Challengers Bengaluru</li>
            <li>Sunrisers Hyderabad</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="font-semibold mb-4 text-[#FFFFFF]">ABOUT</h2>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Anti Corruption Code</li>
            <li>Anti Doping Rules</li>
            <li>TUE Application Form</li>
            <li>Anti Discrimination Code</li>
            <li>Clothing And Equipment Regulations</li>
            <li>Code Of Conduct For Players And Teams Officials</li>
            <li>News Access Regulations</li>
            <li>Image Use Terms</li>
          </ul>
        </div>

        {/* GUIDELINES */}
        <div>
          <h2 className="font-semibold mb-4 text-[#FFFFFF]">GUIDELINES</h2>
          <ul className="space-y-1 text-gray-400">
            <li>IPL Code Of Conduct For Match Officials</li>
            <li>Brand And Protection Guidelines</li>
            <li>Governing Council</li>
            <li>Match Playing Conditions</li>
            <li>PMOA Minimum Standard</li>
            <li>Suspect Action Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-4 text-[#FFFFFF]">CONTACT</h2>
          <ul className="space-y-1 text-gray-400">
            <li>Contact Us</li>
            <li>Sponsorship</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
