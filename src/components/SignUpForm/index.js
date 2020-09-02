import React, { Component } from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
export default class SignInForm extends Component { 
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
  }

  onChangeHandler = ({ name, value }) => {
    this.setState({[name]: value })
  }

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    const { onChangeHandler } = this;

    return(
      <main className="sign-in">
        <h2>I don't have an account</h2>
        <h3>Sign up with your email and password</h3>
        
        <form>
          <InputField 
            label="Display Name"
            name="displayName"
            inputState={ displayName }
            onChangeHandler={ onChangeHandler }
          />
          <InputField 
            label="Email"
            name="email"
            type="email"
            inputState={ email }
            onChangeHandler={ onChangeHandler }
          />
          <InputField 
            label="Password"
            name="password"
            inputState={ password }
            onChangeHandler={ onChangeHandler }
          />
          <InputField 
            label="Confirm Password"
            name="confirmPassword"
            inputState={ confirmPassword }
            onChangeHandler={ onChangeHandler }
            type="password"
          />
          <div className="sign-in__button-container">
            <CustomButton type="primary">Sign Up</CustomButton>
          </div>
        </form>
      </main>
    )
  }
}