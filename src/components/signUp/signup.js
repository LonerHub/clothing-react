import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './styles.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if(password !==confirmPassword) {
      alert('Password not matched');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);      
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>
          I do not have a account
        </h2>
        <span>Sign up with your email and pasword</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            label={'Display Name'}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            label={'Email'}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            label={'Password'}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label={'Confirm Password'}
            onChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;