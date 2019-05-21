import * as React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));
const TripsListPage = lazy(() => import("./pages/TripsListPage"));

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/trips-list" component={TripsListPage} />
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
