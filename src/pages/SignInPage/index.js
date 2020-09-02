import React, { Component } from 'react';
import InputField from '../../components/InputField';

export default class SignInPage extends Component {
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
        <InputField 
          label="email"
          inputState={ email }
          onChangeHandler={ onChangeHandler }
        />
        <InputField 
          label="password"
          inputState={ password }
          onChangeHandler={ onChangeHandler }
          type="password"
        />
      </main>
    )
  }
}