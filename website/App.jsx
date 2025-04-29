import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./page/Admin";
import Mainpage from "./page/Mainpage";
import Layout from "./component/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/" component={Mainpage} />
      </Switch>
    </Layout>
  );
};

export default App;
