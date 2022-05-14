import React from "react";
import InputHandler from "../components/input/InputHandler";
import InputHeader from "../components/input/InputHeader";
import News from "../components/News";
import Footer from "../components/Footer";
const Home = () => {
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
        <Footer />
      </main>
    </div>
  );
};

export default Home;
