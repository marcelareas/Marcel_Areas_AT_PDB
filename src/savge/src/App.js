import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHome from "./components/PageHome";
import PageBanheiros from "./components/PageBanheiros";
import PageDelegacias from "./components/PageDelegacias"
import PageBombeiros from "./components/PageBombeiros"
import PageHoteis from "./components/PageHoteis"
import PageJogosOlimpicos from "./components/PageJogosOlimpicos"
import PagePontosTuristicos from "./components/PagePontosTuristicos"
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
          <PageBombeiros />
        </Route>
        <Route path="/delegacias">
          <PageDelegacias />
        </Route>
        <Route path="/hoteis">
          <PageHoteis />
        </Route>
        <Route path="/jogosOlimpicos">
          <PageJogosOlimpicos />
        </Route>
        <Route path="/pontosTuristicos">
          <PagePontosTuristicos />
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
