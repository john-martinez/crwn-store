import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ShopPage from './pages/ShopsPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ ShopPage } />
        <Route path="/shop/:category" component={ ShopPage } />
        <Route path="/details/:productId" component={ DetailsPage } />
      </Switch>
    </div>
  );
}

export default App;
