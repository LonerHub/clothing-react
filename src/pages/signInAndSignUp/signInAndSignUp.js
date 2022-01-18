import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signup';
import './styles.scss';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default SignInAndSignUp;