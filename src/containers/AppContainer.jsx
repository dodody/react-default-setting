import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeContainer } from 'containers';


const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
};

export default AppContainer;