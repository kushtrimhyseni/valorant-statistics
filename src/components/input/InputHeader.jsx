import React from "react";

const InputHeader = () => {
  return (
    <div className="flex mt-12">
      <div className="bg-[#ff4655] rounded h-[68px] w-[72px] p-3 mr-4">
        <svg
          data-v-7d44ae36=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="title-icon"
          fill="white"
        >
          <path
            data-v-7d44ae36=""
            d="M2.2 4l.1.1c.2.3 11.8 14.8 12.8 16v.1a.1.1 0 01-.1.1H8.8a.52.52 0 01-.4-.2c-.2-.2-4.4-5.4-6.3-7.9A.31.31 0 002 12V4.1a.349.349 0 01.2-.1zm19.8.2c0-.1-.1-.1-.1-.2h-.1l-.2.2c-.9 1.1-8.1 10.1-8.3 10.3l-.1.1c0 .1 0 .1.1.1h6.2c.1 0 .2-.1.3-.2l.2-.2c.5-.7 1.7-2.2 1.8-2.3 0-.1 0-.1.1-.2v-.1c.1-2.4.1-4.9.1-7.5z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-end">
        <h1 className="text-5xl text-white-900 font-bold font-rajdhani">
          VALORANT STATS
        </h1>
        <span className="text-[#99abbf] text-base mt-1 font-rajdhani">
          Check Detailed Valrorant Stats and Leaderboards
        </span>
      </div>
    </div>
  );
};

export default InputHeader;
