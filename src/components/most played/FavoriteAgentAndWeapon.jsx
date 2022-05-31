import React, { useContext } from "react";
import ValorantApiContext from "../context/ValorantApiContext";

const FavoriteAgent = () => {
  const { agent, weapon, matches } = useContext(ValorantApiContext);

  console.log(agent, weapon, matches);

  return (
    <div className="p-6 md:p-0 mt-2">
      <div className="flex flex-col col-span-1 p-6 md:p-0 bg-[#0F1923] shadow-lg h-[200px] rounded-lg border-2 border-[#1b2733]">
        <span className="mt-4 text-center text-white-900 font-rajdhani text-md font-bold">
          Most Played Agent:
        </span>
        <span className="text-center text-white-900 font-rajdhani text-xl font-bold">
          {agent}
        </span>
        <img
          className="h-20 w-20 rounded-100 mx-auto mt-4"
          src={`/assets/agents/${agent}.png`}
          alt=""
        />
      </div>
      <div className="flex flex-col col-span-1 p-6 lg:p-0 bg-[#0F1923] shadow-lg h-auto md:h-[250px] justify-center items-center rounded-lg border-2 border-[#1b2733]">
        <span className="mt-4 text-center text-white-900 font-rajdhani text-md font-bold">
          Most Played Weapon:
        </span>
        <span className="text-center text-white-900 font-rajdhani text-xl font-bold">
          {weapon.name}
        </span>
        <img
          className="w-full md:w-1/2 mx-auto mt-4"
          src={weapon.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default FavoriteAgent;
