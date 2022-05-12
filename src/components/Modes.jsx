import React, { useState, useContext } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
const Modes = () => {
  const { input, getMatches, tag } = useContext(ValorantApiContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (value) => {
    getMatches("", { user: input, tag, filter: value });
    setClicked(value);
  };
  return (
    <div>
      <ul className="modes overflow-auto md:overflow-hidden flex md:items-center md:justify-center h-[60px] m-0 p-1 list-none w-full">
        <li
          className={`${
            clicked ? "" : "bg-[#ff4655]"
          } single-mode flex rounded-sm font-bold h-8 items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
        >
          Last 5
        </li>
        <li
          className={`${
            clicked === "Competitive" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Competitive")}
        >
          Competitive
        </li>
        <li
          className={`${
            clicked === "Unrated" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Unrated")}
        >
          Unrated
        </li>
        <li
          className={`${
            clicked === "SpikeRush" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("SpikeRush")}
        >
          Spike Rush
        </li>
        <li
          className={`${
            clicked === "Escalation" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Escalation")}
        >
          Escalation
        </li>
        <li
          className={`${
            clicked === "Replication" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Replication")}
        >
          Replication
        </li>
      </ul>
    </div>
  );
};

export default Modes;
