import React, { Component } from 'react';
import Header from './components/header/header';
import HomePage from './pages/homePage/homPage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           this.setState({
             currentUser: {
               id: snapShot.id,
               ...snapShot.data(),
             }
           });
         });
      } 
      else {
        this.setState({ currentUser: userAuth });
      }
      
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
   return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
