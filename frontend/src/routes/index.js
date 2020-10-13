import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedIn from '../layout/LoggedIn';
import Search from './Search';
import Home from './Home';
import React from 'react';
import NotFound from './NotFound';
import Todos from './Todos';

export default function Routes() {
  return (
    <Router>
      <LoggedIn>
        <Switch>
          <Route path="/search">
            <Search/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/todos">
            <Todos/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </LoggedIn>
    </Router>
  );
}
