import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* Load the default page with a slash */}
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/popular">Popular</a>
        </li>
        <li>
          <a href="/toprated">Top-Rated</a>
        </li>
        <li>
          <a href="/candy">Concession</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
