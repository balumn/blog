import React from 'react';
import './App.css';
import Blog from './components/Blog';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feeds from './components/Feeds';
import One from './components/Feeds/Local/ArticleOne';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
              <Route exact path="/" component={Blog} />
              <Route exact path="/read" component={Feeds} />
              <Route exact path="/read/about-thoughts-overflow/" component={One} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
