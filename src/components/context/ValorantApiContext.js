import { createContext, useState } from "react";

const ValorantApiContext = createContext();

export const ValorantApiProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");
  const [tier, setTier] = useState("");
  const [matches, setMatches] = useState("");

  const playerStatistics = async () => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v1/account/${input}/${tag}`
    );
    const data = await response.json();
    setPlayerData(data);
    playerRank(data.data.puuid);
    getMatches(data.data.puuid);
    setError("");
  };

  const playerRank = async (puuid) => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/${puuid}`
    );
    const data = await response.json();
    setTier(data);
    setError("");
  };

  const getMatches = async (puuid) => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/eu/${puuid}`
    );
    const data = await response.json();
    setMatches(data);
    setError("");
  };

  return (
    <ValorantApiContext.Provider
      value={{
        playerData,
        error,
        playerStatistics,
        input,
        setInput,
        setTag,
        tier,
        playerRank,
        getMatches,
        matches,
      }}
    >
      {children}
    </ValorantApiContext.Provider>
  );
};

export default ValorantApiContext;
