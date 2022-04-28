import InputHandler from "./components/input/InputHandler";
import InputHeader from "./components/input/InputHeader";
import { ValorantApiProvider } from "./components/context/ValorantApiContext";
function App() {
  return (
    <>
      <header className="background">
        <ValorantApiProvider>
          <div className="container mx-auto pt-12">
            <InputHeader />
            <InputHandler />

            {/* {playerData?.map((player) => {
            return <span>{player.metadata.map}</span>;
          })} */}
          </div>
        </ValorantApiProvider>
      </header>
    </>
  );
}

export default App;
