import React from "react";
import InputHandler from "../components/input/InputHandler";
import InputHeader from "../components/input/InputHeader";
import PersonalStats from "../components/PersonalStats";
const Home = () => {
  return (
    <div>
      <header className="background">
        <div className="container mx-auto pt-12 p-6">
          <InputHeader />
          <InputHandler />
        </div>
      </header>
      <main className="mt-12 p-6 lg:p-0">
        <div className="flex flex-col">
          <PersonalStats />
          {/* <News /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
