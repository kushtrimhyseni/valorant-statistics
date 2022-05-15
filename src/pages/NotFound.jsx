import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="hero h-screen" data-theme="dark">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <Link className="btn btn-primary btn-lg" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
