import React, { useContext } from "react";
import AgentCard from "./AgentCard";
import ValorantApiContext from "./context/ValorantApiContext";
import LastMatches from "./LastMatches";
import FavoriteAgentAndWeapon from "./most played/FavoriteAgentAndWeapon";
const PersonalStats = () => {
  const { playerData, error } = useContext(ValorantApiContext);

  return (
    <>
      {error ? (
        <div className="flex justify-center items-center text-center text-base-400 text-3xl font-md font-raleway mt-8">
          {error}
        </div>
      ) : (
        <>
          {playerData.data && (
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-2 mb-8 md:mt-12 p-6 xl:mt-4 xl:p-0">
              <div className="col-span-1 flex flex-col">
                <AgentCard />
                <FavoriteAgentAndWeapon />
              </div>
              <div className="col-span-2">
                <LastMatches />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PersonalStats;
