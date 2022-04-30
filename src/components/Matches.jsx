import React, { useContext } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
const Matches = () => {
  const { matches } = useContext(ValorantApiContext);

  return (
    <div>
      {matches.data?.map((single) => {
        return (
          <div className="flex flex-col mb-8 mt-4 lg:mt-0">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-[#1b2733] shadow-lg rounded-lg p-6 mb-4">
              <span className="text-[#ffffff] text-3xl font-rajdhani font-bold">
                Map: {single.metadata.map}
              </span>
              <span className="text-[#ffffff] text-3xl font-rajdhani font-bold">
                Mode: {single.metadata.mode}
              </span>
              <span className="text-[#ffffff] text-3xl font-rajdhani font-bold">
                Server: {single.metadata.cluster}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-[#00554d]">
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#00eab1]  border-b border-gray-200 bg-gray-50">
                          Team A
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          Match Rank
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-white-900  border-b border-gray-200 bg-gray-50">
                          Score
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
                          HS
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-gradient-to-r from-blue-500">
                      {single.players.blue?.map((allplayers) => {
                        const kd =
                          allplayers.stats.kills - allplayers.stats.deaths;
                        return (
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

                            <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200">
                              <div className="flex justify-center items-center">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={`assets/ranks/${allplayers.currenttier_patched}.webp`}
                                  alt="admin dashboard ui"
                                />
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.score}
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
                          Team B
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
                          HS
                        </th>
                      </tr>
                    </thead>
                    {single.players.red?.map((allplayers) => {
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
                                  src={`assets/ranks/${allplayers.currenttier_patched}.webp`}
                                  alt="admin dashboard ui"
                                />
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b text-center border-gray-200">
                              <div className="text-md font-roboto font-bold leading-5 text-[#efefef]">
                                {allplayers.stats.score}
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
        );
      })}
    </div>
  );
};

export default Matches;
