import React from 'react';
import './App.css';
import Blog from './components/Blog';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feeds from './components/Feeds';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
              <Route exact path="/" component={Blog} />
              <Route exact path="/read" component={Feeds} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
