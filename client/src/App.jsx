import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/Home";
import TeamSelector from "./components/TeamSelector";
import TeamDetails from "./components/TeamDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/teams/:teamId" element={<TeamSelector />} /> {/* if you need this */}
        <Route path="/team-selector" element={<TeamDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
