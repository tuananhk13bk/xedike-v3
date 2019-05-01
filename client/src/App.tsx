import React from "react";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
