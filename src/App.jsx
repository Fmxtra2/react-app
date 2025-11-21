import { Route, Routes } from "react-router-dom";
import "./App.css";
import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import TopRatedList from "./components/TopRatedList.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Shriek n' Chill</h1>
        <p>
          Are you a horror fan? Do you enjoy unwinding with blood, guts, and
          blood curdling screams? SO DO WE! Welcome to your list of popular and
          top-rated horror movies! Grab your snacks, get comfy, and enjoy! Make
          sure you grab a blanket if you need to hide!
        </p>
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/toprated" element={<TopRatedList />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>

      {/* Footer component - Footer.jsx [rafce - footer>p>Made by name], Footer.css */}
      <Footer />
    </>
  );
}

export default App;
