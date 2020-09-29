import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
//import Details from "./Details";

const Details = lazy(() => import("./Details"));
const App = () => {
  const theme = useState("peru");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
