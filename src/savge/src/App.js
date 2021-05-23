import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHome from "./components/PageHome";
import PageBanheiros from "./components/PageBanheiros";
import ErrorPage from "./components/PageError";
import CompNavBar from "./components/CompNavbar";

function App() {
  return (
    <Router>
      <CompNavBar />
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/banheiros">
          <PageBanheiros />
        </Route>
        <Route path="/bombeiros">
          <PageBanheiros />
        </Route>
        <Route path="/delegacias">
          <PageBanheiros />
        </Route>
        <Route path="/escolas">
          <PageBanheiros />
        </Route>
        <Route path="/hoteis">
          <PageBanheiros />
        </Route>
        <Route path="/jogosOlimpicos">
          <PageBanheiros />
        </Route>
        <Route path="/pontosTuristicos">
          <PageBanheiros />
        </Route>
        <Route path="/postosSaude">
          <PageBanheiros />
        </Route>
        <Route path="/praias">
          <PageBanheiros />
        </Route>
        <Route path="/restaurantes">
          <PageBanheiros />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
