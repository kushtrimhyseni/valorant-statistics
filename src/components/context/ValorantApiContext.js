import { createContext, useState, useEffect } from "react";

const ValorantApiContext = createContext();

export const ValorantApiProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");
  const [tier, setTier] = useState("");
  const [matches, setMatches] = useState("");
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const playerStatistics = async () => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v1/account/${input}/${tag}`
    );
    const data = await response.json();
    if (data.status === 200) {
      setPlayerData(data);
      playerRank(data.data.puuid);
      getMatches(data.data.puuid);
      setLoading(false);
    } else {
      setError("Player not found");
      setLoading();
    }
  };

  const playerRank = async (puuid) => {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/${puuid}`
    );
    const data = await response.json();
    if (data.status === 200) {
      setTier(data);
      setLoading(false);
      setError("");
    } else {
      setError("Player not found");
      setLoading();
    }
  };

  const getMatches = async (puuid, options) => {
    let response;
    if (options) {
      response = await fetch(
        `https://api.henrikdev.xyz/valorant/v3/matches/eu/${options.user}/${options.tag}?filter=${options.filter}`
      );
    } else {
      response = await fetch(
        `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/eu/${puuid}`
      );
    }
    const data = await response.json();
    setMatches(data);
    setError("");
  };

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await fetch(
      "https://api.henrikdev.xyz/valorant/v1/website/en-us"
    );
    const data = await response.json();
    if (data.status === 200) {
      setNews(data.data);
      setLoading(false);
      setError("");
    } else {
      setError("Problem fetching articles please try again !");
      setLoading();
    }
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
        tag,
        tier,
        playerRank,
        getMatches,
        matches,
        loading,
        news,
      }}
    >
      {children}
    </ValorantApiContext.Provider>
  );
};

export default ValorantApiContext;
