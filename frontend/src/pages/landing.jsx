import React from "react";
import mongoose from "mongoose";
import "../App.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>ZoomX</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#ec9405ff" }}>Connect </span>with your loved
            ones
          </h1>
          <p className="distance">Cover a distance by ZoomX</p>
          <div role="button">
            {" "}
            <Link to="/auth">Get Started ➜</Link>
          </div>
        </div>

        <div>
          <img src="/mobile.png" alt="Mobile" />
        </div>
      </div>
    </div>
  );
}
