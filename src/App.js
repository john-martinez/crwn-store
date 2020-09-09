import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ShopPage from './pages/ShopsPage';
import SignInPage from './pages/SignInPage';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = { currentUser: null }

  componentDidMount() {
    auth.onAuthStateChanged(async user => {
      if (user) {
        console.log(user)
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }})
        })
      } else {
        this.setState({ currentUser: user })
      }
    })
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
