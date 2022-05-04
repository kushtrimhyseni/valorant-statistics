import React, { useContext, useRef, useState } from "react";
import ValorantApiContext from "../context/ValorantApiContext";

const InputHandler = () => {
  const [, setClear] = useState([]);

  const { playerStatistics, setInput, setTag, input, playerData } =
    useContext(ValorantApiContext);
  const clearInput = useRef();

  const inputHandler = (input) => {
    const value = input.target.value;
    const seperatedValue = value.split("#");
    setInput(seperatedValue[0]);
    setTag(seperatedValue[1]);
  };

  const clickHandler = () => {
    if (input === " ") {
      alert("User field cannot be empty!");
    } else {
      playerStatistics();
      setClear(playerStatistics);
      clearInput.current.value = "";
    }
  };

  const clearResults = () => {
    setClear([]);
  };

  // const handleKeyPress = (event) => {
  //   if (event.keyCode === 13 && input === " ") {
  //     alert("User field cannot be empty!");
  //   } else {
  //     playerStatistics();
  //     clearInput.current.value = "";
  //   }
  // };
  return (
    <>
      <div className="mt-4 flex flex-col md:flex-row">
        <div className="flex">
          <div className="bg-[#1b2733] shadow-md w-[48px] h-[48px] rounded mr-1 p-3">
            <svg
              onClick={clickHandler}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="cursor-pointer border-b-2 border-[#ff4655]"
            >
              <path d="M2.2 4l.1.1c.2.3 11.8 14.8 12.8 16v.1a.1.1 0 01-.1.1H8.8a.52.52 0 01-.4-.2c-.2-.2-4.4-5.4-6.3-7.9A.31.31 0 002 12V4.1a.349.349 0 01.2-.1zm19.8.2c0-.1-.1-.1-.1-.2h-.1l-.2.2c-.9 1.1-8.1 10.1-8.3 10.3l-.1.1c0 .1 0 .1.1.1h6.2c.1 0 .2-.1.3-.2l.2-.2c.5-.7 1.7-2.2 1.8-2.3 0-.1 0-.1.1-.2v-.1c.1-2.4.1-4.9.1-7.5z"></path>
            </svg>
          </div>
          <input
            ref={clearInput}
            onKeyUp={inputHandler}
            type="text"
            placeholder="Find an Agent, ie. player#NA1"
            className="input w-full md:w-[275px] bg-[#f1f1f1] border-t-2"
          ></input>
        </div>
        <div
          onClick={clearResults}
          className={`${
            playerData.data ? "flex" : "hidden"
          } clear-results w-[100px] h-[40px] md:ml-4`}
        >
          <a href="/" className="transparent">
            <p className="h-[40px]">
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">Clear</span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default InputHandler;
