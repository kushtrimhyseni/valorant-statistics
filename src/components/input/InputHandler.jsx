import React from "react";

const InputHandler = () => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div className="mt-4 flex">
      <div className="bg-[#1b2733] shadow-md w-[48px] h-[48px] rounded mr-1 p-3">
        <svg
          onClick={clickHandler}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="cursor-pointer"
        >
          <path d="M2.2 4l.1.1c.2.3 11.8 14.8 12.8 16v.1a.1.1 0 01-.1.1H8.8a.52.52 0 01-.4-.2c-.2-.2-4.4-5.4-6.3-7.9A.31.31 0 002 12V4.1a.349.349 0 01.2-.1zm19.8.2c0-.1-.1-.1-.1-.2h-.1l-.2.2c-.9 1.1-8.1 10.1-8.3 10.3l-.1.1c0 .1 0 .1.1.1h6.2c.1 0 .2-.1.3-.2l.2-.2c.5-.7 1.7-2.2 1.8-2.3 0-.1 0-.1.1-.2v-.1c.1-2.4.1-4.9.1-7.5z"></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Find an Agent, ie. player#NA1"
        className="input w-full max-w-xs bg-[#f1f1f1] border-t-2"
      ></input>
    </div>
  );
};

export default InputHandler;
