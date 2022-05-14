import React from "react";
import InputHeader from "../components/input/InputHeader";
import PersonalStats from "../components/PersonalStats";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div>
      <header className="single-match-bg grid grid-cols-1 md:grid-cols-2 place-items-center p-6">
        <div className="container mx-auto w-full md:w-1/2 white">
          <InputHeader />
        </div>
        <Link to="/" className="w-full md:w-1/2">
          <div className="back-to-home">
            <a href="/" className="white">
              <p>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Home</span>
              </p>
            </a>
          </div>
        </Link>
      </header>
      <main>
        <PersonalStats />
        <Footer />
      </main>
    </div>
  );
};

export default User;
