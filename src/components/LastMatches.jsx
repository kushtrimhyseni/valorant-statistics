import React, { useContext, useState } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
import { Link } from "react-router-dom";
const LastMatches = () => {
  const { matches, playerData, input, getMatches, tag } =
    useContext(ValorantApiContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (value) => {
    getMatches("", { user: input, tag, filter: value });
    setClicked(value);
  };

  let id = 0;
  return (
    <div
      className={`flex-col mb-4 mt-4 lg:mt-0 ${matches ? "flex" : "hidden"}`}
    >
      <div className="flex justify-start items-center bg-[#1b2733] p-4 shadow-lg rounded-tr-lg rounded-tl-lg">
        <svg viewBox="0 0 31.969 32" className="w-[32px] h-[32px] mr-2">
          <path d="M31.97 19v-6h-3V9.862a4.008 4.008 0 002.957-3.285l-1.974-.282a2 2 0 11-2.54-2.2l-.565-1.915a3.987 3.987 0 00.127 7.684V13h-9.99v-2.14a4 4 0 10-2 0V13H4.996V7.866a4 4 0 10-2 0V13h-3v6h8.996v2.14a4 4 0 102 0V19h9.99v5.137a4 4 0 102 0V19zm-5.994-4h4v2h-4zM13.987 7.009a2 2 0 112 2 2 2 0 01-2-2zm-11.988-3a2 2 0 112 2 2 2 0 01-2-1.997zM5.995 17h-4v-2h4zm5.994 7.992a2 2 0 11-2-2 2 2 0 012 1.999zm0-7.992h-4v-2h4zm5.994 0h-4v-2h4zm5.994 10.989a2 2 0 11-2-2 2 2 0 012 1.999zM19.981 17v-2h4v2z"></path>
          <path d="M29.704 5.011l1.729-1a4.028 4.028 0 00-1.974-1.71l-.745 1.853a2.02 2.02 0 01.99.857z"></path>
        </svg>

        <div className="flex flex-col">
          <span className="text-white-900 font-rajdhani text-2xl font-bold">
            Matches
          </span>
          <span className="text-[#99abbf] font-roboto font-bold">
            Updated: {playerData.data?.last_update}
          </span>
        </div>
      </div>

      <ul className="modes flex items-center justify-center h-[60px] m-0 p-1 list-none w-full">
        <li
          className={`${
            clicked ? "" : "bg-[#ff4655]"
          } single-mode flex rounded-sm font-bold whitespace-no-wrap h-8 items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
        >
          Last 5
        </li>
        <li
          className={`${
            clicked === "Competitive" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm whitespace-no-wrap h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Competitive")}
        >
          Competitive
        </li>
        <li
          className={`${
            clicked === "Unrated" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm whitespace-no-wrap h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Unrated")}
        >
          Unrated
        </li>
        <li
          className={`${
            clicked === "SpikeRush" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm whitespace-no-wrap h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("SpikeRush")}
        >
          Spike Rush
        </li>
        <li
          className={`${
            clicked === "Escalation" ? "bg-[#ff4655]" : ""
          } single-mode flex rounded-sm whitespace-no-wrap h-8 font-bold items-center justify-center select-none text-[#EFEFEF] text-md font-rajdhani cursor-pointer`}
          onClick={() => handleClick("Escalation")}
        >
          Escalation
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 bg-[#1b2733]">
        {matches.data?.map((match) => {
          id++;
          const searchedPlayer = match.players.all_players.find(
            (player) => player.name === input
          );
          const date = match.metadata.game_start_patched.split("2022");
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
                    className="w-10 h-10"
                    src={searchedPlayer?.assets?.agent.small}
                    alt=""
                  />
                  <div className="flex flex-col items-center lg:items-start ml-0 lg:ml-4">
                    <span className="font-rajdhani font-bold text-2xl text-white-900">
                      {match.metadata.map}
                    </span>
                    <span>{match.metadata.mode}</span>
                  </div>
                  <img
                    className="w-10 h-10"
                    src={`assets/ranks/${searchedPlayer?.currenttier_patched}.webp`}
                    alt=""
                  />
                </div>
                <div className="flex justify-around w-full items-center ml-0 md:ml-6 mt-6 md:mt-0">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex">
                      <span
                        className={`font-roboto font-bold text-xl ${
                          match.teams.blue.has_won
                            ? "text-white-900"
                            : "text-[#ef5351]"
                        }`}
                      >
                        {match.teams.blue.rounds_won} :{" "}
                        <span
                          className={`font-roboto font-bold text-xl ${
                            match.teams.red.has_won
                              ? "text-white-900"
                              : "text-red-700"
                          }`}
                        >
                          {" "}
                          {match.teams.red.rounds_won}
                        </span>{" "}
                      </span>
                    </div>
                    {/* <span>MVP</span> */}
                  </div>
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

export default LastMatches;
