import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ValorantApiContext from "./context/ValorantApiContext";
const SingleMatchCard = () => {
  const { matches, input } = useContext(ValorantApiContext);

  let id = 0;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 bg-[#1b2733]">
        {matches.data?.map((match) => {
          id++;
          const searchedPlayer = match?.players?.all_players.find(
            (player) => player.name === input
          );
          const date = match?.metadata.game_start_patched.split("2022");
          return (
            <>
              <div
                className={`flex flex-col justify-center items-center  w-full h-[100px] ${
                  match.teams[searchedPlayer?.team?.toLowerCase()]?.has_won
                    ? "bg-gradient-to-r from-green-200"
                    : "bg-gradient-to-r from-purple-200"
                }`}
                key={id}
              >
                <span className="text-rajdhani text-md font-bold text-center">
                  {date[0]}
                </span>
                <div className="font-roboto text-xl mt-2">
                  <span
                    className={`font-roboto font-bold text-xl ${
                      match.teams[searchedPlayer?.team?.toLowerCase()]?.has_won
                        ? "text-white-900"
                        : "text-[#ef5351]"
                    }`}
                  >
                    {match.teams.blue.rounds_won}
                  </span>{" "}
                  :{" "}
                  <span
                    className={`font-roboto font-bold text-xl ${
                      match.teams[searchedPlayer?.team?.toLowerCase()]?.has_won
                        ? "text-white-900"
                        : "text-red-700"
                    }`}
                  >
                    {match.teams.red.rounds_won}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {matches?.data?.map((match) => {
        const searchedPlayer = match.players.all_players.find(
          (player) => player.name === input
        );
        const killDeathRatio = (
          searchedPlayer?.stats.kills / searchedPlayer?.stats.deaths
        ).toFixed(2);
        return (
          <Link
            to={`/match/${match.metadata.matchid}/?user=${searchedPlayer?.name}&tag=${searchedPlayer?.tag}`}
          >
            <div
              className={`flex w-full flew-wrap mt-4 cursor-pointer shadow-lg border-l-2 ${
                match.teams[searchedPlayer?.team?.toLowerCase()]?.has_won
                  ? "border-[#16e5b4]"
                  : "border-[#ef5351]"
              }`}
            >
              <div
                className={`h-full w-full lg:h-[100px] bg-[#0f1923] ${
                  match.teams[searchedPlayer?.team?.toLowerCase()]?.has_won
                    ? "bg-gradient-to-r from-blue-500"
                    : "bg-gradient-to-r from-purple-200"
                } p-4 flex flex-col md:flex-row`}
              >
                <div className="flex w-full lg:max-w-[320px] justify-around md:justify-between items-center ml-0 md:ml-4">
                  <img
                    className="w-20 h-20"
                    src={searchedPlayer?.assets?.agent.small}
                    alt=""
                  />
                  <div className="flex flex-col items-center lg:items-start ml-0 lg:ml-4">
                    <span className="font-rajdhani font-bold text-2xl text-white-900">
                      {match.metadata.map}
                    </span>
                    <div className="flex">
                      <img
                        className="w-[1.5rem] h-[1.5rem]"
                        src={`/assets/modes/${match.metadata.mode}.webp`}
                        alt=""
                      />
                      <span className="font-md ml-1">
                        {match.metadata.mode}
                      </span>
                    </div>
                  </div>
                  <img
                    className="w-10 h-10"
                    src={`/assets/ranks/${searchedPlayer?.currenttier_patched}.webp`}
                    alt=""
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-0">
                  <div className="flex justify-center items-center ml-4 w-full">
                    <span
                      className={`font-roboto font-bold text-xl ${
                        match.teams.blue.has_won
                          ? "text-white-900"
                          : "text-[#ef5351]"
                      }`}
                    >
                      {match.teams.blue.rounds_won}{" "}
                    </span>
                    <span className="ml-2">:</span>
                    <span
                      className={`font-roboto font-bold text-xl ml-2 ${
                        match.teams.red.has_won
                          ? "text-white-900"
                          : "text-red-700"
                      }`}
                    >
                      {" "}
                      {match.teams.red.rounds_won}
                    </span>{" "}
                  </div>
                  {/* <span>MVP</span> */}
                </div>
                <div className="flex justify-around w-full items-center ml-0 md:ml-6 mt-6 md:mt-0">
                  <div className="flex flex-col">
                    <span className="flex justify-end items-end text-sm text-[#99abbf] font-roboto font-bold">
                      K/D/A
                    </span>
                    <span className="text-xl font-roboto font-bold text-white-900">
                      {searchedPlayer?.stats.kills}/
                      {searchedPlayer?.stats.deaths}/
                      {searchedPlayer?.stats.assists}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex justify-center items-center text-sm text-[#99abbf] font-roboto font-bold">
                      K/D
                    </span>
                    <span
                      className={`text-xl font-roboto font-bold ${
                        killDeathRatio > 1 ? "text-[#16e5b4]" : "text-[#ef5351]"
                      }`}
                    >
                      {killDeathRatio}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#99abbf] font-roboto text-center font-bold">
                      ACS
                    </span>
                    <span className="text-xl font-roboto font-bold text-white-900 text-center">
                      {Math.floor(
                        searchedPlayer?.stats.score / match.rounds.length
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#99abbf] font-roboto font-bold">
                      HS
                    </span>
                    <span className="text-xl font-roboto font-bold text-white-900 text-center">
                      {searchedPlayer?.stats.headshots}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SingleMatchCard;
