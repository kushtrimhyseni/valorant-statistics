import React, { useContext } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
import Spinner from "./Spiner";

import Modes from "./Modes";
import SingleMatchCard from "./SingleMatchCard";
const LastMatches = () => {
  const { matches, playerData, loading } = useContext(ValorantApiContext);

  if (!loading) {
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
        <Modes />
        <SingleMatchCard />
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default LastMatches;
