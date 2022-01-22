import React, { Component } from 'react';
import Header from './components/header/header';
import HomePage from './pages/homePage/homPage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/userReducer/actions';
import './App.css';

class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           setCurrentUser({
               id: snapShot.id,
               ...snapShot.data()
            })
         });
      } 
      else {
        setCurrentUser(userAuth);
      }
      
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
   return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ):(
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
