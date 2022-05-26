/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";

const ValorantApiContext = createContext();

export const ValorantApiProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");
  const [tier, setTier] = useState("");
  const [matches, setMatches] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [agent, setAgent] = useState("");
  const [weapon, setWeapon] = useState("");

  //Get player statistic from Valorant public API
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

  //Get player rank based on puuid
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

  //Get last 5 matches based on Mode filter
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

  // Fetch latest 3 articles from a public api
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

  //Get favorite weapon and agent on last 5 matches
  const getFavAgentAndWeapon = (matches) => {
    if (!matches) return;
    const agentOccurrences = {};
    const weaponOccurences = {};

    matches.forEach((match) => {
      const matchPlayer = match?.players.all_players.find((matchPlayer) => {
        return (
          matchPlayer?.name === input && matchPlayer.tag === tag.toUpperCase()
        );
      });

      if (agentOccurrences.hasOwnProperty(matchPlayer?.character)) {
        agentOccurrences[matchPlayer?.character]++;
      } else {
        agentOccurrences[matchPlayer?.character] = 1;
      }

      let bestAgent = null;

      Object.keys(agentOccurrences).forEach((character) => {
        if (!bestAgent || agentOccurrences[character] > bestAgent.count) {
          bestAgent = { name: character, count: agentOccurrences[character] };
        }
      });
      setAgent(bestAgent.name);
    });

    matches.forEach((match) => {
      const allKills = match.kills.filter((favoriteWeapon) => {
        const killerName = input;
        const killerTag = tag.toUpperCase();
        const fullUser = `${killerName}#${killerTag}`;
        return favoriteWeapon.killer_display_name === fullUser;
      });

      allKills.forEach((kill) => {
        if (!kill.damage_weapon_name) return;
        if (weaponOccurences.hasOwnProperty(kill?.damage_weapon_name)) {
          weaponOccurences[kill?.damage_weapon_name].count++;
        } else {
          weaponOccurences[kill?.damage_weapon_name] = {
            count: 1,
            image: kill.damage_weapon_assets.display_icon,
          };
        }
      });

      let bestWeapon = null;

      Object.keys(weaponOccurences).forEach((damage_weapon_name) => {
        if (
          !bestWeapon ||
          weaponOccurences[damage_weapon_name].count > bestWeapon.count
        ) {
          bestWeapon = {
            name: damage_weapon_name,
            count: weaponOccurences[damage_weapon_name]?.count,
            image: weaponOccurences[damage_weapon_name]?.image,
          };
        }
      });

      setWeapon({ name: bestWeapon?.name, image: bestWeapon?.image });
    });
  };
  useEffect(() => {
    if (matches) {
      getFavAgentAndWeapon(matches?.data);
    }
  }, [matches]);

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
        agent,
        weapon,
      }}
    >
      {children}
    </ValorantApiContext.Provider>
  );
};

export default ValorantApiContext;
