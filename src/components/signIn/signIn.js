import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.state({ email: '', password: '' });
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.state({ [name]: value });
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
            handleChange={this.handleChange} 
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
         

          <CustomButton type='submit'>
            SIGN IN
          </CustomButton>
        </form>

      </div>
    )
  }
}

export default SignIn;
