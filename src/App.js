import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";

import Header from "./components/header";
import Main from "./pages/main";

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tibia Worlds - A simple react app</title>
    </Helmet>
    <Header />
    <Main />
  </div>
);

export default App;
