/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InputHeader from "../components/input/InputHeader";
import ValorantApiContext from "../components/context/ValorantApiContext";
import Spinner from "../components/Spiner";
import TeamBlueTable from "../components/tables/TeamBlueTable";
import TeamRedTable from "../components/tables/TeamRedTable";
import MatchReport from "../components/MatchReport";

const SingleMatch = () => {
  const { loading } = useContext(ValorantApiContext);

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
        <div className="container mx-auto mt-4 grid grid-cols-1 mb-8">
          <div className="flex flex-col md:mt-4 lg:mt-0 col-span-2 p-6 md:p-0">
            <div className="flex flex-col col-span-2">
              <MatchReport />
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <TeamBlueTable />
                  <TeamRedTable />
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
