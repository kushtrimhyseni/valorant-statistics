/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const MatchReport = () => {
  const [match, setMatch] = useState([]);
  const { id } = useParams();

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
  return (
    <div>
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
      <div className="bg-[#0f1923] w-full mb-8 md:h-[88px] flex flex-col md:flex-row rounded-b-xl border-2 border-[#1b2733] p-4">
        <div className="flex flex-col justify-center items-center md:items-start md:mr-8">
          <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold">
            {match?.metadata?.map}
          </span>
          <span className="text-[#99abbf] font-roboto text-sm">
            {match?.metadata?.mode}
          </span>
        </div>
        <div className="flex justify-center items-center md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start md:mr-4">
            <span
              className={`${
                match?.teams?.blue.has_won ? "text-[#16e5b4]" : "text-[#ff4655]"
              } text-3xl font-rajdhani font-bold`}
            >
              {match?.teams?.blue.rounds_won}
            </span>
            <span
              className={`${
                match?.teams?.blue.has_won ? "text-[#16e5b4]" : "text-[#ff4655]"
              } text-sm font-roboto`}
            >
              Blue
            </span>
          </div>
          <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold justify-center items-center md:items-start">
            :
          </span>
          <div className="flex flex-col justify-center items-center md:ml-4">
            <span
              className={`${
                match?.teams?.red?.has_won ? "text-[#16e5b4]" : "text-[#ff4655]"
              } text-3xl font-rajdhani font-bold`}
            >
              {match?.teams?.red.rounds_won}
            </span>
            <span
              className={`${
                match?.teams?.red?.has_won ? "text-[#16e5b4]" : "text-[#ff4655]"
              } text-sm font-roboto`}
            >
              Red
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:ml-8">
          <span className="text-[#EFEFEF] text-3xl font-rajdhani font-bold">
            {(match?.metadata?.game_length / 1000 / 60).toFixed(0)} min
          </span>
          <span className="text-[#99abbf] font-roboto text-sm">
            {match?.metadata?.game_start_patched}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchReport;
