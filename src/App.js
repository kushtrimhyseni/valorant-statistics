import { ValorantApiProvider } from "./components/context/ValorantApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMatch from "./pages/SingleMatch";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <>
      <ValorantApiProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/match/:id/" element={<SingleMatch />}></Route>
            <Route path="/user/" element={<User />}></Route>
          </Routes>
        </Router>
      </ValorantApiProvider>
    </>
  );
}

export default App;
