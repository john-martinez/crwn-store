import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/details/:productId" component={ DetailsPage } />
    </Switch>
  );
}

export default App;
