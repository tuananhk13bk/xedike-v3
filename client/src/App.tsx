import * as React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";
const MainLayout = lazy(() => import("./layout/MainLayout"));
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));
const TripsListPage = lazy(() => import("./pages/TripsListPage"));
const UserInfoPage = lazy(() => import("./pages/UserInfoPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/trips-list" component={TripsListPage} />
              <Route path="/user/profile" component={UserInfoPage} />
            </Switch>
          </Suspense>
        </MainLayout>
      </Suspense>
    </Router>
  );
};

export default App;
