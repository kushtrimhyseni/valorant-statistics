import React from "react";
import spinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mx-auto flex justify-center items-center">
      <img
        width={180}
        src={spinner}
        alt="Loading"
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
