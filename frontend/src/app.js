import React from 'react';
import './app.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoggedIn from './layout/logged-in/logged-in.layout';
import HomePage from './pages/home/home.page';
import SearchPage from './pages/search/search.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <LoggedIn>
            <SearchPage />
          </LoggedIn>
        </Route>

        <Route path="/">
          <LoggedIn>
            <HomePage />
          </LoggedIn>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
