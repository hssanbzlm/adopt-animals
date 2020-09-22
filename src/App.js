import React, { useState } from "react";
import "./App.css";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("peru");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me !</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
