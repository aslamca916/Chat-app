import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Welcome() {
  return (
    <div className="container">
      <h3 className="mb-4">Welcome{}</h3>
      <div>
        <p>Already existing user?</p>
        <Link className="btn btn-primary mb-4" to="/login">Login</Link>
      </div>
      <div>
        <p>New User?</p>
        <Link className="btn btn-primary mb-4" to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Welcome;
