import React, { Component } from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
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

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;

    if (password === confirmPassword) {

      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      try {
        createUserProfileDocument(user, { displayName })
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    const { onChangeHandler, onSubmitHandler } = this;

    return(
      <main className="sign-in">
        <h2>I don't have an account</h2>
        <h3>Sign up with your email and password</h3>
        
        <form onSubmit={ onSubmitHandler}>
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
            <CustomButton buttonType="primary" type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </main>
    )
  }
}