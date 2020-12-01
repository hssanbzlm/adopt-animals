import React, { lazy, Suspense } from "react";
import "./App.css";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "./Store";
const Details = lazy(() => import("./Details"));
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Suspense fallback={<h1> Loading... </h1>}>
          {" "}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>{" "}
        </Suspense>{" "}
      </div>{" "}
    </Provider>
  );
};

export default App;
