import { ValorantApiProvider } from "./components/context/ValorantApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMatch from "./pages/SingleMatch";
import Home from "./pages/Home";
// import News from "./components/News";

function App() {
  return (
    <>
      <ValorantApiProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/match/:id/:user" element={<SingleMatch />}></Route>
          </Routes>
        </Router>
      </ValorantApiProvider>
    </>
  );
}

export default App;
