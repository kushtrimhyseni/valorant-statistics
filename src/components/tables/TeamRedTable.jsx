/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TeamRedTable = () => {
  const { id } = useParams();
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getSingleMatch();
  }, []);

  const getSingleMatch = async () => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v2/match/${id}`
    );
    const data = await response.json();
    setMatch(data.data);
  };

  let ids = 0;

  return (
    <div>
      <table id="" className="display min-w-full">
        <thead
          className={`${
            match.teams?.red.has_won ? "bg-[#00554d]" : "bg-[#ff294e]"
          }`}
        >
          <tr>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#00eab1]  border-b border-gray-200 bg-gray-50">
              Team Red
            </th>
            <th className="px-6 py-3 text-xs whitespace-no-wrap font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
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
          ids++;
          const kd = allplayers.stats.kills - allplayers.stats.deaths;
          return (
            <tbody
              className={`${
                match.teams?.red.has_won
                  ? "bg-gradient-to-r from-blue-500"
                  : "bg-gradient-to-r from-purple-200"
              }`}
            >
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
                    <Link
                      to={`/user/?user=${allplayers?.name}&tag=${allplayers?.tag}`}
                    >
                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-white-900">
                          {allplayers.name} #{allplayers.tag}
                        </div>
                      </div>
                    </Link>
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
                    {Math.round(allplayers.stats.score / match.rounds.length)}
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
                    {(allplayers.stats.kills / allplayers.stats.deaths).toFixed(
                      2
                    )}
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
  );
};

export default TeamRedTable;
