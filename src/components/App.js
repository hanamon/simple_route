import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from '../routes/Home';
import About from '../routes/About';
import Dashboard from '../routes/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;