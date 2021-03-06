import React, { useContext } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
const AgentCard = () => {
  const { playerData, tier } = useContext(ValorantApiContext);
  return (
    <div className="card card-side shadow-xl flex flex-col md:flex-row h-full md:h-[375px]">
      <figure>
        <img
          src={playerData.data?.card?.large}
          alt="PlayerCard"
          className="w-full md:w-[200px] h-[350px] object-center md:h-full lg:object-top"
        />
      </figure>
      <div className="card-body w-full h-full">
        <h2 className="card-title">
          {playerData.data?.name}#{playerData.data?.tag}
        </h2>
        <span className="font-rajdhani font-md text-xl text-[#EFEFEF]">
          Account Level: {playerData.data?.account_level}
        </span>
        <span className="font-rajdhani font-md text-xl text-[#EFEFEF]">
          Region: {playerData.data?.region.toUpperCase()}
        </span>
        <span className="font-rajdhani font-md text-xl text-[#EFEFEF]">
          Last update: {playerData.data?.last_update}
        </span>
        <span className="font-rajdhani font-md text-xl text-[#EFEFEF]">
          Current Tier: {tier.data?.currenttier}
        </span>
        <span className="font-rajdhani font-md text-xl text-[#EFEFEF]">
          Elo: {tier.data?.currenttier}
        </span>
        <div className="flex flex-col justify-start items-start">
          <span className="font-rajdhani font-md text-2xl text-[#EFEFEF]">
            Current Ratings:
          </span>
          <div className="flex items-center">
            <img
              src={`/assets/ranks/${tier.data?.currenttierpatched}.webp`}
              alt={tier.data?.currenttierpatched}
              className="w-[48px] h-[48px]"
            />
            <div className="flex flex-col ml-2">
              <span className="text-[#99abbf] text-sm font-rajdhani font-bold">
                Rating
              </span>
              <span className="text-[#99abbf] text-xl font-bold font-rajdhani">
                {tier.data?.currenttierpatched}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
