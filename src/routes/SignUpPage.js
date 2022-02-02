import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import UserAuthenticationForm from '../components/UserAuthenticationForm';

const SignUpPage = () => {
  return (
    <>
      <ScrollToTop />
      <UserAuthenticationForm formType="signUp" />
    </>
  );
};

export default SignUpPage;
