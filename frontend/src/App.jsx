import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Simulation from "./pages/Simulation";
import Analytics from "./pages/Analytics";
import Emergency from "./pages/Emergency";
import About from "./pages/About";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/simulation"
            element={<Simulation />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/emergency"
            element={<Emergency />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}


export default App;