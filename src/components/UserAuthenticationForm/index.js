import React, { useState } from 'react';
import {
  Container,
  FormWrap,
  ReturnHomeBox,
  ReturnHomeLink,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './UserAuthenticationElements';
import { FaArrowLeft, FaArrowUp } from 'react-icons/fa';

const UserAuthenticationForm = ({ formType }) => {
  const [buttonAlert, setButtonAlert] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  // Render the button click alert

  // handle Submit Form Function
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the form's default response
    setButtonAlert(true);
    console.log('you pushed the button');
  };

  // Render button alert
  const renderButtonResponseAlert = () => {
    return (
      <Text>
        User account functionality is not currently available, these forms do
        nothing and store no data. There is no backend hooked up yet. Updates
        coming soon.
      </Text>
    );
  };

  const ReturnHome = () => {
    return (
      <ReturnHomeBox onMouseEnter={onHover} onMouseLeave={onHover}>
        <ReturnHomeLink to="/">
          {hover ? (
            <FaArrowUp style={{ marginRight: '10px' }} />
          ) : (
            <FaArrowLeft style={{ marginRight: '10px' }} />
          )}
          Return Home
        </ReturnHomeLink>
      </ReturnHomeBox>
    );
  };

  // Render a sign in form function
  const renderLoginForm = () => {
    return (
      <Container>
        <FormWrap>
          <Form id="loginForm" onSubmit={handleSubmit}>
            <ReturnHome />
            <FormH1>Sign in to your account</FormH1>
            <Text red={true}>Feature Disabled</Text>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" disabled />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" disabled />
            <FormButton type="submit">Continue</FormButton>
            {buttonAlert ? (
              renderButtonResponseAlert()
            ) : (
              <Text>Forgot password?</Text>
            )}
          </Form>
          {buttonAlert ? renderButtonResponseAlert() : ''}
        </FormWrap>
      </Container>
    );
  };

  const renderSignUpForm = () => {
    return (
      <Container>
        <FormWrap>
          <Form id="signUpForm" onSubmit={handleSubmit}>
            <ReturnHome />
            <FormH1>Sign up for a new account!</FormH1>
            <Text red={true}>Feature Disabled</Text>
            <FormLabel htmlFor="signupEmail">Email</FormLabel>
            <FormInput id="signupEmail" type="email" disabled />
            <FormLabel htmlFor="signupPasswordOne">Password</FormLabel>
            <FormInput id="signupPasswordOne" type="password" disabled />
            <FormLabel htmlFor="signupPasswordTwo">
              Password Again to Verify
            </FormLabel>
            <FormInput id="signupPasswordTwo" type="password" disabled />
            <FormButton type="submit">Sign Up</FormButton>
            {buttonAlert ? renderButtonResponseAlert() : ''}
          </Form>
        </FormWrap>
      </Container>
    );
  };

  if (formType === 'login') {
    return renderLoginForm();
  } else {
    return renderSignUpForm();
  }
};

export default UserAuthenticationForm;
