import React from 'react';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import './index.scss';

export default function SignInPage() {
  return(
    <main className="sign-in-page">
      <SignInForm />
      <SignUpForm />
    </main>
  )
}