import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import './styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {
          currentUser ?
          (
            <div className='option' onClick={() => auth.signOut()}>
              SIGNOUT
            </div>
          ) : (
            <Link to='/signin' className='option'>
              SIGN IN
            </Link>
          )
        }
        <CartIcon />
      </div>
      {
        hidden? null : <CartDropdown />
      }
    </div>
  )
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden,
});

export default connect(mapStateToProps)(Header);
