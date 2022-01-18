import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            value={this.state.email} 
            onChange={this.handleChange} 
            label='Email'
            required 
          />

          <FormInput 
            name='password' 
            value={this.state.password} 
            onChange={this.handleChange} 
            label='Password'
            required 
          />
         
          <div className='buttons'>
            <CustomButton type='submit'>
              SIGN IN
            </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignin type="button">
              Sign in with Google
            </CustomButton>
          </div>

        </form>

      </div>
    )
  }
}

export default SignIn;
