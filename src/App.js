import InputHeader from "./components/input/InputHeader";
import { ValorantApiProvider } from "./components/context/ValorantApiContext";
import PersonalStats from "./components/PersonalStats";
import InputHandler from "./components/input/InputHandler";
function App() {
  return (
    <>
      <ValorantApiProvider>
        <header className="background">
          <div className="container mx-auto pt-12">
            <InputHeader />
            <InputHandler />
          </div>
        </header>
        <main className="mt-12">
          <div>
            <PersonalStats />
          </div>
        </main>
      </ValorantApiProvider>
    </>
  );
}

export default App;
