import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Banheiros from "./pages/Banheiros";
import ErrorPage from "./pages/ErrorPage"
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/banheiros">
          <Banheiros />
        </Route>
        <Route >
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
