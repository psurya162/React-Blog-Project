import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Hollywood from "./Hollywood";
import Bollywood from "./Bollywood";
import Sports from "./Sports";
import Fitness from "./Fitness";
import Technology from "./Technology";
import DataCompo from "../../Store/Store";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Router>
        <div className="Nav-Bar">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Home
          </NavLink>
          <NavLink
            to="/Hollywood"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Hollywood
          </NavLink>
          <NavLink
            to="/Bollywood"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Bollywood
          </NavLink>
          <NavLink
            to="/Sports"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Sports
          </NavLink>
          <NavLink
            to="/Fitness"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Fitness
          </NavLink>
          <NavLink
            to="/Technology"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            className="link"
          >
            Technology
          </NavLink>
        </div>
        <hr />

        <DataCompo>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Bollywood" element={<Bollywood />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </DataCompo>
      </Router>
    </>
  );
};

export default Navbar;
