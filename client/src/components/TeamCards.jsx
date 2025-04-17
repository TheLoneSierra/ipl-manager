// components/TeamCards.jsx
import { useNavigate } from "react-router-dom";

const teams = [
  {
    name: "Chennai Super Kings",
    short: "CSK",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
  },
  {
    name: "Delhi Capitals",
    short: "DC",
    logo: "https://documents.iplt20.com/ipl/DC/logos/Logooutline/DCoutline.png",
  },
  {
    name: "Gujarat Titans",
    short: "GT",
    logo: "https://documents.iplt20.com/ipl/GT/logos/Logooutline/GToutline.png",
  },
  {
    name: "Kolkata Knight Riders",
    short: "KKR",
    logo: "https://documents.iplt20.com/ipl/KKR/logos/Logooutline/KKRoutline.png",
  },
  {
    name: "Lucknow Super Giants",
    short: "LSG",
    logo: "https://documents.iplt20.com/ipl/LSG/logos/Logooutline/LSGoutline.png",
  },
  {
    name: "Mumbai Indians",
    short: "MI",
    logo: "https://documents.iplt20.com/ipl/MI/logos/Logooutline/MIoutline.png",
  },
  {
    name: "Punjab Kings",
    short: "PBKS",
    logo: "https://documents.iplt20.com/ipl/PBKS/logos/Logooutline/PBKSoutline.png",
  },
  {
    name: "Rajasthan Royals",
    short: "RR",
    logo: "https://documents.iplt20.com/ipl/RR/logos/Logooutline/RRoutline.png",
  },
  {
    name: "Royal Challengers Bangalore",
    short: "RCB",
    logo: "https://documents.iplt20.com/ipl/RCB/logos/Logooutline/RCBoutline.png",
  },
  {
    name: "Sunrisers Hyderabad",
    short: "SRH",
    logo: "https://documents.iplt20.com/ipl/SRH/logos/Logooutline/SRHoutline.png",
  },
];

const TeamCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {teams.map((team) => (
        <div
          key={team.name}
          onClick={() =>
            navigate(`/teams/${team.name.replace(/\s+/g, "-").toLowerCase()}`)
          }
          className="bg-[#0B2A58] text-white p-4 rounded-lg shadow cursor-pointer hover:bg-[#123D6B] transition"
        >
          <img src={team.logo} alt={team.name} className="h-16 mx-auto mb-2" />
          <h2 className="text-center font-semibold text-sm">{team.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
