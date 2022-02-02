import styled from 'styled-components';
import TruckBackgroundImage from '../images/truck-pexels.jpg';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  background-image: url(${TruckBackgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #151615;

  width: 100vw;
  max-width: 800px;
  /* border: 1px solid blue; */
  margin: 0 auto;
  padding-bottom: 40px;
`;

export const FormH1 = styled.h1`
  font-size: 33px;
  color: black;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 34px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  /* text-align: center; */
  /* width: 80%; */
  margin: 0 auto;
  margin-top: ${({ extraMargin }) => (extraMargin ? '50px' : '0px')};
  max-width: 500px;
  /* padding: 20px; */
  /* border: 1px solid red; */
`;
export const Label = styled.label`
  font-size: 22px;
  margin-bottom: 15px;
  margin: 9px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 10%;
  /* border: 1px solid yellow; */
`;

export const TextInput = styled.input`
  height: 2.5em;
  padding: 0 4px;
  margin: 15px;

  background-color: #282a28;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  transition: outline 0.3s ease;

  &:focus {
    border: none;
    outline: 3px dotted #7e2d88;
  }

  &:active {
    border: none;
    outline: 7px dotted #7e2d88;
  }
`;

export const SubmitButton = styled.input`
  max-width: 200px;
  margin: 0 auto;
  padding: 10px 40px;
  font-size: 22px;
  background-color: purple;
  border: none;
  box-shadow: none;
  color: #fff;
  font-weight: 700;
  transition: all 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #212221;
    color: #800080;
  }
`;
