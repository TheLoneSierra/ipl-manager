import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const teams = [
  {
    name: "Chennai Super Kings",
    short: "CSK",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    captain: "MS Dhoni",
    coach: "Stephen Fleming",
    owner: "Chennai Super Kings Cricket Limited",
    venue: "M. A. Chidambaram Stadium",
    titles: ["2010", "2011", "2018", "2021", "2023"],
    website: "#",
  },
  {
    name: "Delhi Capitals",
    short: "DC",
    logo: "https://documents.iplt20.com/ipl/DC/logos/Logooutline/DCoutline.png",
    captain: "Rishabh Pant",
    coach: "Ricky Ponting",
    owner: "JSW Group & GMR Group",
    venue: "Arun Jaitley Stadium",
    titles: [],
    website: "#",
  },
  {
    name: "Gujarat Titans",
    short: "GT",
    logo: "https://documents.iplt20.com/ipl/GT/logos/Logooutline/GToutline.png",
    captain: "Shubman Gill",
    coach: "Ashish Nehra",
    owner: "CVC Capital Partners",
    venue: "Narendra Modi Stadium",
    titles: ["2022"],
    website: "#",
  },
  {
    name: "Kolkata Knight Riders",
    short: "KKR",
    logo: "https://documents.iplt20.com/ipl/KKR/logos/Logooutline/KKRoutline.png",
    captain: "Shreyas Iyer",
    coach: "Chandrakant Pandit",
    owner: "SRK, Juhi Chawla & Mehta Group",
    venue: "Eden Gardens",
    titles: ["2012", "2014"],
    website: "#",
  },
  {
    name: "Lucknow Super Giants",
    short: "LSG",
    logo: "https://documents.iplt20.com/ipl/LSG/logos/Logooutline/LSGoutline.png",
    captain: "KL Rahul",
    coach: "Justin Langer",
    owner: "RPSG Group",
    venue: "BRSABV Ekana Stadium",
    titles: [],
    website: "#",
  },
  {
    name: "Mumbai Indians",
    short: "MI",
    logo: "https://documents.iplt20.com/ipl/MI/logos/Logooutline/MIoutline.png",
    captain: "Hardik Pandya",
    coach: "Mark Boucher",
    owner: "Reliance Industries",
    venue: "Wankhede Stadium",
    titles: ["2013", "2015", "2017", "2019", "2020"],
    website: "#",
  },
  {
    name: "Punjab Kings",
    short: "PBKS",
    logo: "https://documents.iplt20.com/ipl/PBKS/logos/Logooutline/PBKSoutline.png",
    captain: "Shikhar Dhawan",
    coach: "Trevor Bayliss",
    owner: "Preity Zinta & Ness Wadia",
    venue: "PCA Stadium",
    titles: [],
    website: "#",
  },
  {
    name: "Rajasthan Royals",
    short: "RR",
    logo: "https://documents.iplt20.com/ipl/RR/logos/Logooutline/RRoutline.png",
    captain: "Sanju Samson",
    coach: "Kumar Sangakkara",
    owner: "Manoj Badale & Co.",
    venue: "Sawai Mansingh Stadium",
    titles: ["2008"],
    website: "#",
  },
  {
    name: "Royal Challengers Bangalore",
    short: "RCB",
    logo: "https://documents.iplt20.com/ipl/RCB/logos/Logooutline/RCBoutline.png",
    captain: "Faf du Plessis",
    coach: "Andy Flower",
    owner: "United Spirits",
    venue: "M. Chinnaswamy Stadium",
    titles: [],
    website: "#",
  },
  {
    name: "Sunrisers Hyderabad",
    short: "SRH",
    logo: "https://documents.iplt20.com/ipl/SRH/logos/Logooutline/SRHoutline.png",
    captain: "Pat Cummins",
    coach: "Daniel Vettori",
    owner: "SUN Group",
    venue: "Rajiv Gandhi Intl. Stadium",
    titles: ["2016"],
    website: "#",
  },
];

const playersData = {
  batter: [
    {
      name: "Virat Kohli",
      img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png",
      role: "Top-order Batter",
    },
    {
      name: "Rohit Sharma",
      img: "https://i.imgur.com/zQZSWrt.png",
      role: "Opening Batter",
    },
    {
      name: "KL Rahul",
      img: "https://i.imgur.com/WiE3cdd.png",
      role: "Opener",
    },
    {
      name: "Shubman Gill",
      img: "https://i.imgur.com/WThlXcA.png",
      role: "Opening Batter",
    },
    {
      name: "David Warner",
      img: "https://i.imgur.com/bNSPLP1.png",
      role: "Top-order Batter",
    },
  ],
  bowler: [
    {
      name: "Jasprit Bumrah",
      img: "https://i.imgur.com/wg5UASu.png",
      role: "Fast Bowler",
    },
    {
      name: "Rashid Khan",
      img: "https://i.imgur.com/V33Nc4O.png",
      role: "Spin Bowler",
    },
    {
      name: "Mohammed Shami",
      img: "https://i.imgur.com/RJbV9Nz.png",
      role: "Fast Bowler",
    },
    {
      name: "Yuzi Chahal",
      img: "https://i.imgur.com/x5ndUqK.png",
      role: "Leg Spinner",
    },
    {
      name: "Trent Boult",
      img: "https://i.imgur.com/VcP9sw1.png",
      role: "Fast Bowler",
    },
  ],
  allRounder: [
    {
      name: "Hardik Pandya",
      img: "https://i.imgur.com/NiG8AA1.png",
      role: "All-rounder",
    },
    {
      name: "Ben Stokes",
      img: "https://i.imgur.com/y3rGHRK.png",
      role: "All-rounder",
    },
    {
      name: "Ravindra Jadeja",
      img: "https://i.imgur.com/NKgyb3j.png",
      role: "All-rounder",
    },
    {
      name: "Andre Russell",
      img: "https://i.imgur.com/CtDkNd7.png",
      role: "Power Hitter / Bowler",
    },
    {
      name: "Marcus Stoinis",
      img: "https://i.imgur.com/gfDdtVp.png",
      role: "All-rounder",
    },
  ],
};



const TeamSelector = () => {
  const { teamId } = useParams();
  const [selected, setSelected] = useState(teams[0]);

  useEffect(() => {
    const teamFromUrl = teams.find(
      (team) =>
        team.name.replace(/\s+/g, "-").toLowerCase() === teamId.toLowerCase()
    );
    if (teamFromUrl) {
      setSelected(teamFromUrl);
    }
  }, [teamId]);

  return (
    <>
    <Navbar />
    <div className="bg-[#061C3D] text-white min-h-screen p-6 font-sans">
      {/* Team Cards */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mb-8">
        {teams.map((team) => (
          <Link
            to={`/teams/${team.name.replace(/\s+/g, "-").toLowerCase()}`}
            key={team.name}
            className={`relative cursor-pointer p-2 rounded-lg bg-[#0B2A58] border-2 transition ${
              selected.name === team.name ? "border-white" : "border-transparent"
            }`}
            onClick={() => setSelected(team)}
          >
            <img src={team.logo} alt={team.name} className="h-14 w-14 mx-auto" />
            {selected.name === team.name && (
              <div className="absolute top-1 right-1 bg-white rounded-full p-1">
                ✅
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Team Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Logo & Website */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <img src={selected.logo} alt={selected.name} className="h-20" />
            <h1 className="text-3xl font-bold">{selected.name}</h1>
          </div>
          <a
            href={selected.website}
            className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Official Team Site 🔗
          </a>
        </div>

        {/* Right: Details */}
        <div className="flex-1 bg-[#0B2A58] p-4 rounded-lg space-y-4">
          <div>
            <span className="font-semibold text-yellow-400">Captain</span>: {selected.captain}
          </div>
          <div>
            <span className="font-semibold text-yellow-400">Coach</span>: {selected.coach}
          </div>
          <div>
            <span className="font-semibold text-yellow-400">Owner</span>: {selected.owner}
          </div>
          <div>
            <span className="font-semibold text-yellow-400">Venue</span>: {selected.venue}
          </div>
          <div>
            <span className="font-semibold text-yellow-400">Titles</span>:{" "}
            {selected.titles.length > 0 ? (
              <span className="flex flex-wrap gap-2 mt-1">
                {selected.titles.map((title, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-[#0B2A58] font-bold px-3 py-1 rounded flex items-center gap-1"
                  >
                    🏆 {title}
                  </span>
                ))}
              </span>
            ) : (
              <span className="italic text-gray-400">No titles yet</span>
            )}
          </div>
        </div>
      </div>

      {/* Player Cards Section */}
      <div className="mt-8 bg-white px-4 sm:px-10 py-8">

{/* Batter Section */}
<div className="mb-10">
  <h2 className="text-3xl font-bold text-black mb-6  inline-block">
     Batters
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {playersData.batter.map((player) => (
      <div
        key={player.name}
        className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
      >
        <img src={player.img} alt={player.name} className="h-24 w-24 rounded-full object-cover mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-gray-800">{player.name}</h4>
        <p className="text-sm text-gray-500">{player.role}</p>
      </div>
    ))}
  </div>
</div>

{/* Bowler Section */}
<div className="mb-10">
  <h2 className="text-3xl font-bold text-black inline-block">
     Bowlers
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {playersData.bowler.map((player) => (
      <div
        key={player.name}
        className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
      >
        <img src={player.img} alt={player.name} className="h-24 w-24 rounded-full object-cover mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-gray-800">{player.name}</h4>
        <p className="text-sm text-gray-500">{player.role}</p>
      </div>
    ))}
  </div>
</div>

{/* All-rounder Section */}
<div>
  <h2 className="text-3xl font-bold text-black inline-block">
     All-rounders
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {playersData.allRounder.map((player) => (
      <div
        key={player.name}
        className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
      >
        <img src={player.img} alt={player.name} className="h-24 w-24 rounded-full object-cover mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-gray-800">{player.name}</h4>
        <p className="text-sm text-gray-500">{player.role}</p>
      </div>
    ))}
  </div>
</div>
</div>


    </div>
    <Footer />

    </>
  );
};

export default TeamSelector;
