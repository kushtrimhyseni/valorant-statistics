/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import InputHeader from "../components/input/InputHeader";
import ValorantApiContext from "../components/context/ValorantApiContext";
import Spinner from "../components/Spiner";

const SingleMatch = () => {
  const { matches, loading } = useContext(ValorantApiContext);
  const [agent, setAgent] = useState("");
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const [match, setMatch] = useState([]);

  const getFavAgent = (matches) => {
    if (!matches) return;
    const agentOccurrences = {};

    matches.forEach((match) => {
      const matchPlayer = match.players.all_players.find((matchPlayer) => {
        return (
          matchPlayer.name === searchParams.get("user") &&
          matchPlayer.tag === searchParams.get("tag")
        );
      });

      if (agentOccurrences.hasOwnProperty(matchPlayer.character)) {
        agentOccurrences[matchPlayer.character]++;
      } else {
        agentOccurrences[matchPlayer.character] = 1;
      }

      let bestAgent = null;

      Object.keys(agentOccurrences).forEach((character) => {
        if (!bestAgent || agentOccurrences[character] > bestAgent.count) {
          bestAgent = { name: character, count: agentOccurrences[character] };
        }
      });
      setAgent(bestAgent.name);
    });
  };

  useEffect(() => {
    getSingleMatch();
    if (matches) {
      getFavAgent(matches.data);
    }
  }, [matches]);
  const getSingleMatch = async () => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v2/match/${id}`
    );
    const data = await response.json();
    setMatch(data.data);
  };

  const searchedPlayer = match?.players?.all_players.find(
    (player) => player.name === searchParams.get("user")
  );
  let ids = 0;
  if (!loading) {
    return (
      <>
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
        <div className="container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-2 mb-8">
          <div className="flex flex-col col-span-1 p-6 lg:p-0 bg-[#0F1923] shadow-lg h-[200px] rounded-lg border-2 border-[#1b2733]">
            <span className="mt-4 text-center text-white-900 font-rajdhani text-md font-bold">
              Top Agent Last 5 Matches:
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
          <div className="flex flex-col lg:mt-0 col-span-2 p-6 lg:p-0">
            <div
              className={`flex flex-col items-start bg-[#0f1923] border-2 border-[#1b2733] shadow-lg rounded-t-xl p-6`}
            >
              <div className="flex justify-start items-center">
                <svg viewBox="0 0 31.969 32" className="w-[32px] h-[32px] mr-2">
                  <path d="M31.97 19v-6h-3V9.862a4.008 4.008 0 002.957-3.285l-1.974-.282a2 2 0 11-2.54-2.2l-.565-1.915a3.987 3.987 0 00.127 7.684V13h-9.99v-2.14a4 4 0 10-2 0V13H4.996V7.866a4 4 0 10-2 0V13h-3v6h8.996v2.14a4 4 0 102 0V19h9.99v5.137a4 4 0 102 0V19zm-5.994-4h4v2h-4zM13.987 7.009a2 2 0 112 2 2 2 0 01-2-2zm-11.988-3a2 2 0 112 2 2 2 0 01-2-1.997zM5.995 17h-4v-2h4zm5.994 7.992a2 2 0 11-2-2 2 2 0 012 1.999zm0-7.992h-4v-2h4zm5.994 0h-4v-2h4zm5.994 10.989a2 2 0 11-2-2 2 2 0 012 1.999zM19.981 17v-2h4v2z"></path>
                  <path d="M29.704 5.011l1.729-1a4.028 4.028 0 00-1.974-1.71l-.745 1.853a2.02 2.02 0 01.99.857z"></path>
                </svg>
                <span className="text-[#ffffff] text-3xl font-rajdhani font-bold">
                  Match Report
                </span>
              </div>
            </div>
            <div className="bg-[#0f1923] w-full mb-8 h-[88px] flex rounded-b-xl border-2 border-[#1b2733] p-4">
              <div className="flex flex-col justify-center items-start md:mr-8">
                <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold">
                  {match?.metadata?.map}
                </span>
                <span className="text-[#99abbf] font-roboto text-sm">
                  {match?.metadata?.mode}
                </span>
              </div>
              <div className="flex">
                <div className="flex flex-col justify-center items-center md:mr-4">
                  <span className="text-[#16e5b4] text-3xl font-rajdhani font-bold">
                    {
                      match?.teams?.[searchedPlayer?.team.toLowerCase()]
                        ?.rounds_won
                    }
                  </span>
                  <span className="text-[#16e5b4] text-sm font-roboto">
                    {searchedPlayer?.team}
                  </span>
                </div>
                <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold">
                  :
                </span>
                <div className="flex flex-col justify-center items-center md:ml-4">
                  <span className="text-[#ff4655] text-3xl font-rajdhani font-bold">
                    {searchedPlayer?.team === "Red"
                      ? match.teams?.blue.rounds_won
                      : match.teams?.red.rounds_won}
                  </span>
                  <span className="text-[#ff4655] text-sm font-roboto">
                    {searchedPlayer?.team === "Red" ? "Blue" : "Red"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start md:ml-8">
                <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold">
                  {(match?.metadata?.game_length / 1000 / 60).toFixed(0)} min
                </span>
                <span className="text-[#99abbf] font-roboto text-sm">
                  {match?.metadata?.game_start_patched}
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full">
                    <thead
                      className={`${
                        match?.teams?.[searchedPlayer?.team.toLowerCase()]
                          ?.has_won
                          ? "bg-[#00554d]"
                          : "bg-[#ff294e]"
                      }`}
                    >
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#00eab1]  border-b border-gray-200 bg-gray-50">
                          Team {searchedPlayer?.team === "Red" ? "Blue" : "Red"}
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          Match Rank
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          ACS
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          K
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          D
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          A
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          +/-
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          K/D
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          HS
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-gradient-to-r from-blue-500">
                      {match.players?.blue?.map((allplayers) => {
                        ids++;
                        const kd =
                          allplayers.stats.kills - allplayers.stats.deaths;
                        return (
                          <tr key={ids}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={allplayers.assets.agent.small}
                                    alt="admin dashboard ui"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium leading-5 text-white-900">
                                    {allplayers.name} #{allplayers.tag}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200">
                              <div className="flex justify-center items-center">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={`/assets/ranks/${allplayers.currenttier_patched}.webp`}
                                  alt="admin dashboard ui"
                                />
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {Math.round(
                                  allplayers.stats.score / match.rounds.length
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.kills}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.deaths}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.assists}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div
                                className={`text-md font-roboto font-bold leading-5 ${
                                  kd > 0 ? "text-[#5ee790]" : "text-[#e4485d]"
                                }`}
                              >
                                {kd}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {(
                                  allplayers.stats.kills /
                                  allplayers.stats.deaths
                                ).toFixed(2)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.headshots}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <thead className="bg-[#ff294e]">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#00eab1]  border-b border-gray-200 bg-gray-50">
                          Team {searchedPlayer?.team}
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          Match Rank
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          ACS
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          K
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          D
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          A
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          +/-
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          K/D
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          HS
                        </th>
                      </tr>
                    </thead>
                    {match.players?.red?.map((allplayers) => {
                      const kd =
                        allplayers.stats.kills - allplayers.stats.deaths;
                      return (
                        <tbody className="bg-gradient-to-r from-purple-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={allplayers.assets.agent.small}
                                    alt="admin dashboard ui"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium leading-5 text-white-900">
                                    {allplayers.name} #{allplayers.tag}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="flex justify-center items-center">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={`/assets/ranks/${allplayers.currenttier_patched}.webp`}
                                  alt="admin dashboard ui"
                                />
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {Math.round(
                                  allplayers.stats.score / match.rounds.length
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.kills}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.deaths}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.assists}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div
                                className={`text-md font-roboto font-bold leading-5 ${
                                  kd > 0 ? "text-[#5ee790]" : "text-[#e4485d]"
                                }`}
                              >
                                {kd}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {(
                                  allplayers.stats.kills /
                                  allplayers.stats.deaths
                                ).toFixed(2)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.headshots}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default SingleMatch;
