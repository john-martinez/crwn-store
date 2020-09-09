import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ShopPage from './pages/ShopsPage';
import SignInPage from './pages/SignInPage';
import Header from './components/Header';
import { auth, firestore } from './firebase/firebase.utils';

class App extends Component {
  state = { currentUser: null }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })

    const test = firestore.doc('/test/JCalSifQJzxNltADzXJX').get();
    
    test.then(data=>console.log(data))
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={ currentUser } />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop/:category" component={ ShopPage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/details/:productId" component={ DetailsPage } />
          <Route path="/signin" component={ SignInPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
