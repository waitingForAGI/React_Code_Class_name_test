import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/agentprofile" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AgentProfile
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/contact" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/agentlist" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AgentList
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
