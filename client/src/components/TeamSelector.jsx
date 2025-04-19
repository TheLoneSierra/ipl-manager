import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TeamSelector = () => {
  const { teamId } = useParams();
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_ENDPOINT}/api/teams`)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.error("Error fetching teams", err));
  }, []);

  useEffect(() => {
    if (teams.length > 0) {
      const teamFromUrl = teams.find(
        (team) =>
          team.team_name.replace(/\s+/g, "-").toLowerCase() ===
          teamId.toLowerCase()
      );
      if (teamFromUrl) {
        setSelected(teamFromUrl);
      }
    }
  }, [teamId, teams]);

  const getPlayersByRole = (role) => {
    return (
      selected?.players.filter(
        (p) => p.role.toLowerCase() === role.toLowerCase()
      ) || []
    );
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-6 font-sans bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp9536040.jpg')",
        }}
      >
        {" "}
        {/* Team Cards */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mb-8 ">
          {teams.map((team) => (
            <Link
              to={`/teams/${team.team_name.replace(/\s+/g, "-").toLowerCase()}`}
              key={team._id}
              className={`relative cursor-pointer p-2 rounded-lg bg-[#0B2A58] border-2 transition ${
                selected?.team_name === team.team_name
                  ? "border-white"
                  : "border-transparent"
              }`}
              onClick={() => setSelected(team)}
            >
              <img
                src={team.logo}
                alt={team.team_name}
                className="h-14 w-14 mx-auto"
              />
              {selected?.team_name === team.team_name && (
                <div className="absolute top-1 right-1  rounded-full p-1">
                  ✅
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* Team Info */}
        {selected && (
          <>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 flex flex-col items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={selected.logo}
                    alt={selected.team_name}
                    className="h-20"
                  />
                  <h1 className="text-3xl text-white font-bold">
                    {selected.team_name}
                  </h1>
                </div>
              </div>

              <div className="flex-1 bg-[#0B2A58] p-4 rounded-lg space-y-4">
                <div>
                  <span className="text-yellow-400 font-semibold">
                    Captain:
                  </span>{" "}
                  {selected.captain}
                </div>
                <div>
                  <span className="text-yellow-400 font-semibold">Coach:</span>{" "}
                  {selected.head_coach}
                </div>
                <div>
                  <span className="text-yellow-400 font-semibold">Owner:</span>{" "}
                  {selected.owners}
                </div>
              </div>
            </div>

            {/* Players */}
            <div className="mt-8">
              {["Batter", "Bowler", "All-rounder"].map((role) => {
                const players = getPlayersByRole(role);
                return players.length > 0 ? (
                  <div key={role} className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-black">
                      {role}s
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {players.map((player, idx) => (
                        <div
                          key={idx}
                          className="bg-[#0B2A58] p-4 rounded-lg text-center"
                        >
                          <img
                            src={player.player_image}
                            alt={player.name}
                            className="h-24 mx-auto rounded"
                          />
                          <h3 className="mt-2 text-white font-semibold">
                            {player.name}
                          </h3>
                          <p className="text-sm text-gray-300">{player.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TeamSelector;
