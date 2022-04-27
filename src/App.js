import { useState, useEffect } from "react";
import InputHandler from "./components/input/InputHandler";
import InputHeader from "./components/input/InputHeader";
function App() {
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    playerStatistics();
  }, []);
  const playerStatistics = async () => {
    const getData = await fetch(
      "https://api.henrikdev.xyz/valorant/v3/matches/eu/frosty/PR01"
    );
    const data = await getData.json();
    if (data.status === 200) {
      setPlayerData(data.data);
      setError("");
    } else {
      setError("Player Not Found!");
    }
  };
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="container mx-auto">
          <InputHeader />
          <InputHandler />
          {/* {playerData?.map((player) => {
            return <span>{player.metadata.map}</span>;
          })} */}
        </div>
      )}
    </>
  );
}

export default App;
