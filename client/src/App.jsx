import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/Home";
import TeamSelector from "./components/TeamSelector";
import TeamDetails from "./components/TeamDetails";

function App() {
  const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/teams/:teamId" element={<TeamSelector />} />{" "}
          {/* if you need this */}
          <Route path="/team-selector" element={<TeamDetails />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
