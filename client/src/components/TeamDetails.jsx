import { useParams } from "react-router-dom";

 const teams = [
    {
      name: "Chennai Super Kings",
      logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
      captain: "MS Dhoni",
      coach: "Stephen Fleming",
      owner: "Chennai Super Kings Cricket Limited",
      venue: "M. A. Chidambaram Stadium",
      titles: ["2010", "2011", "2018", "2021", "2023"],
      officialSite: "https://www.chennaisuperkings.com/"
    },
    {
      name: "Delhi Capitals",
      logo: "https://documents.iplt20.com/ipl/DC/logos/Logooutline/DCoutline.png",
      captain: "David Warner",
      coach: "Ricky Ponting",
      owner: "JSW Group, GMR Group",
      venue: "Arun Jaitley Stadium",
      titles: [],
      officialSite: "https://www.delhicapitals.in/"
    },
    {
      name: "Gujarat Titans",
      logo: "https://documents.iplt20.com/ipl/GT/logos/Logooutline/GToutline.png",
      captain: "Shubman Gill",
      coach: "Ashish Nehra",
      owner: "CVC Capital Partners",
      venue: "Narendra Modi Stadium",
      titles: ["2022"],
      officialSite: "https://www.gujarattitansipl.com/"
    },
    {
      name: "Kolkata Knight Riders",
      logo: "https://documents.iplt20.com/ipl/KKR/logos/Logooutline/KKRoutline.png",
      captain: "Shreyas Iyer",
      coach: "Chandrakant Pandit",
      owner: "Red Chillies Entertainment",
      venue: "Eden Gardens",
      titles: ["2012", "2014"],
      officialSite: "https://www.kkr.in/"
    },
    {
      name: "Lucknow Super Giants",
      logo: "https://documents.iplt20.com/ipl/LSG/logos/Logooutline/LSGoutline.png",
      captain: "KL Rahul",
      coach: "Justin Langer",
      owner: "RPSG Group",
      venue: "BRSABV Ekana Cricket Stadium",
      titles: [],
      officialSite: "https://www.lucknowsupergiants.in/"
    },
    {
      name: "Mumbai Indians",
      logo: "https://documents.iplt20.com/ipl/MI/logos/Logooutline/MIoutline.png",
      captain: "Hardik Pandya",
      coach: "Mark Boucher",
      owner: "Reliance Industries",
      venue: "Wankhede Stadium",
      titles: ["2013", "2015", "2017", "2019", "2020"],
      officialSite: "https://www.mumbaiindians.com/"
    },
    {
      name: "Punjab Kings",
      logo: "https://documents.iplt20.com/ipl/PBKS/logos/Logooutline/PBKSoutline.png",
      captain: "Shikhar Dhawan",
      coach: "Trevor Bayliss",
      owner: "Preity Zinta, Ness Wadia",
      venue: "IS Bindra Stadium",
      titles: [],
      officialSite: "https://www.punjabkingsipl.in/"
    },
    {
      name: "Rajasthan Royals",
      logo: "https://documents.iplt20.com/ipl/RR/logos/Logooutline/RRoutline.png",
      captain: "Sanju Samson",
      coach: "Kumar Sangakkara",
      owner: "Manoj Badale",
      venue: "Sawai Mansingh Stadium",
      titles: ["2008"],
      officialSite: "https://www.rajasthanroyals.com/"
    },
    {
      name: "Royal Challengers Bangalore",
      logo: "https://documents.iplt20.com/ipl/RCB/logos/Logooutline/RCBoutline.png",
      captain: "Faf du Plessis",
      coach: "Andy Flower",
      owner: "United Spirits",
      venue: "M. Chinnaswamy Stadium",
      titles: [],
      officialSite: "https://www.royalchallengers.com/"
    },
    {
      name: "Sunrisers Hyderabad",
      logo: "https://documents.iplt20.com/ipl/SRH/logos/Logooutline/SRHoutline.png",
      captain: "Pat Cummins",
      coach: "Daniel Vettori",
      owner: "Sun TV Network",
      venue: "Rajiv Gandhi Intl. Cricket Stadium",
      titles: ["2016"],
      officialSite: "https://www.sunrisershyderabad.in/"
    }
  ];

export default function TeamDetails() {
  const { teamId } = useParams();
  const team = teams.find(
    (t) => t.name.replace(/\s+/g, "-").toLowerCase() === teamId
  );

  return (
    <div className="bg-[#001845] text-white p-6 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={team.logo}
          alt={team.name}
          className="w-32 md:w-44 h-auto object-contain"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{team.name}</h1>
          <p className="text-yellow-400 mt-2">🏆 {team.titles.join(", ")}</p>
          <a
            href={team.officialSite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
          >
            Official Team Site ↗
          </a>
        </div>
      </div>

      <div className="mt-6 bg-[#002855] p-4 rounded-md max-w-xl mx-auto">
        <p><span className="font-bold text-yellow-400">Captain:</span> {team.captain}</p>
        <p><span className="font-bold text-yellow-400">Coach:</span> {team.coach}</p>
        <p><span className="font-bold text-yellow-400">Owner:</span> {team.owner}</p>
        <p><span className="font-bold text-yellow-400">Venue:</span> {team.venue}</p>
      </div>
    </div>
  );
}
