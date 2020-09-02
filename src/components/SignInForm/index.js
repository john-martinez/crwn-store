import React, { Component } from 'react';
import InputField from '../../components/InputField';

export default class SignInForm extends Component { 
  state = {
    email: '',
    password: '',
  }

  onChangeHandler = ({ name, value }) => {
    this.setState({[name]: value })
  }

  render() {
    const { email, password } = this.state;
    const { onChangeHandler } = this;

    return(
      <main className="sign-in">
        <h2>I already have an acconut</h2>
        <h3>Sign in with your email and password.</h3>

        <form>
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
            type="password"
          />
        </form>
      </main>
    )
  }
}