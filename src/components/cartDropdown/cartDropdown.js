import React from 'react';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { connect } from 'react-redux';
import './styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id}  item={cartItem}/>  
          )
        }
      </div>
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems} }) => ({
  cartItems: cartItems,
})

export default connect(mapStateToProps)(CartDropdown);
