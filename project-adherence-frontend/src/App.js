import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import MainMenu from "./components/MainMenu/MainMenu"
import ConfirmPlan from "./components/ConfirmPlan/ConfirmPlan";

function App() {
  return (
    <main>
      <Switch>
      <Route exact path="/">
        {<Redirect to="/patient/home" />}
      </Route>
        <Route path="/patient/home" render={(props) => (
          <Home isPatient={true} />
        )} />
        <Route path="/physician/home" render={(props) => (
          <Home isPatient={false} />
        )} />
        <Route path="/patient/sign-in" render={(props) => (
          <SignIn isPatient={true} />
        )} />
        <Route path="/physician/sign-in" render={(props) => (
          <SignIn isPatient={false} />
        )} />
        <Route path="/patient/menu" render={(props) => (
          <MainMenu blueTileValue={"Reminders"} redTileValue={"Reflections"} />
        )} />
        <Route path="/physician/menu" render={(props) => (
          <MainMenu blueTileValue={"Create new Plan"} redTileValue={"View Patients"} />
        )} />
        <Route path="/confirmPlan" component={ConfirmPlan} />
      </Switch>
    </main>
  );
}

export default App;
