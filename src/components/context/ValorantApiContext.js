import { createContext, useState } from "react";

const ValorantApiContext = createContext();

export const ValorantApiProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState("");

  const playerStatistics = async () => {
    const getData = await fetch(
      "https://api.henrikdev.xyz/valorant/v3/matches/eu/frosty/PR01"
    );
    const data = await getData.json();
    console.log(data);
    if (data.status === 200) {
      setPlayerData(data.data);
      setError("");
    } else {
      setError("Player Not Found!");
    }
  };

  return (
    <ValorantApiContext.Provider
      value={{ playerData, error, playerStatistics }}
    >
      {children}
    </ValorantApiContext.Provider>
  );
};

export default ValorantApiContext;
