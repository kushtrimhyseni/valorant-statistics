import React, { useContext } from "react";
import InputHandler from "../components/input/InputHandler";
import InputHeader from "../components/input/InputHeader";
import PersonalStats from "../components/PersonalStats";
import News from "../components/News";
import Spinner from "../components/Spiner";
import ValorantApiContext from "../components/context/ValorantApiContext";

const Home = () => {
  const { loading } = useContext(ValorantApiContext);

  if (!loading) {
    return (
      <div>
        <header className="background">
          <div className="container mx-auto pt-12 p-6">
            <InputHeader />
            <InputHandler />
          </div>
        </header>
        <main>
          <News />
          <PersonalStats />
        </main>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Home;
