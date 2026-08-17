import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaChartBar,
  FaAmbulance,
  FaInfoCircle,
  FaTrafficLight
} from "react-icons/fa";

import { NavLink } from "react-router-dom";


export default function Navbar() {

  return (
    <header className="navbar">

      {/* ================= LOGO ================= */}

      <NavLink to="/" className="logo">

        <div className="logo-icon">
          <FaTrafficLight />
        </div>

        <div className="logo-text">
          Traffic<span>Flow</span> AI
        </div>

      </NavLink>


      {/* ================= NAVIGATION ================= */}

      <nav className="nav-links">

        <NavLink to="/">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>


        <NavLink to="/simulation">
          <FaProjectDiagram />
          <span>Simulation</span>
        </NavLink>


        <NavLink to="/analytics">
          <FaChartBar />
          <span>Analytics</span>
        </NavLink>


        <NavLink to="/emergency">
          <FaAmbulance />
          <span>Emergency</span>
        </NavLink>


        <NavLink to="/about">
          <FaInfoCircle />
          <span>About</span>
        </NavLink>

      </nav>


      {/* ================= LIVE STATUS ================= */}

      <div className="nav-status">

        <span className="live-dot"></span>

        <span>
          SYSTEM LIVE
        </span>

      </div>

    </header>
  );
}