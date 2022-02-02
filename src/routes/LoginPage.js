import React from 'react';
import UserAuthenticationForm from '../components/UserAuthenticationForm';
import ScrollToTop from '../components/ScrollToTop';
const LoginPage = () => {
  return (
    <>
      <ScrollToTop />
      <UserAuthenticationForm formType="login" />
    </>
  );
};

export default LoginPage;
