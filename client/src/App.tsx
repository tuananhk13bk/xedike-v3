import React from "react";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TripsListPage from "./pages/TripsListPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/trips-list" component={TripsListPage} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
