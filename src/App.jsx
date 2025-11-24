import { Route, Routes } from "react-router-dom";
import "./App.css";
import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PopularList from "./components/PopularList.jsx";
import TopRatedList from "./components/TopRatedList.jsx";
import HomeList from "./components/HomeList.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Hibernation Station NEW</h1>
        <p>
          Do you wanna know what movies are popular in real time? Looking for a
          new movie that has top ratings? Do you want to become one with your
          couch, bed, or chair?! Welcome to our App!! Check out what movies are
          popular, top-rated or see what we have for concessions! Gotta have
          snacks with your binge session!!
        </p>
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path="/Home" element={<HomeList />} />
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
