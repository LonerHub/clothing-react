import Header from './components/header/header';
import HomePage from './pages/homePage/homPage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
