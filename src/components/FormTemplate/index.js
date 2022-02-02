import React, { useState } from 'react';

import {
  FormContainer,
  Form,
  Fieldset,
  FormH1,
  InputBox,
  InputGroup,
  Label,
  TextInput,
  SubmitButton,
} from '../FormElements';

const FormTemplate = () => {
  return (
    <FormContainer>
      <FormH1>Standard Input Form</FormH1>
      <Form autoComplete="off">
        <InputGroup>
          <Fieldset>
            <InputBox>
              <Label htmlFor="nameInput">Name</Label>
              <TextInput id="nameInput" type="text"></TextInput>
            </InputBox>
            <InputBox>
              <Label htmlFor="titleInput">Title</Label>
              <TextInput id="" titleInput="text"></TextInput>
            </InputBox>
            <InputBox>
              <Label htmlFor="factionInput">Faction</Label>
              <TextInput id="factionInput" type="text"></TextInput>
            </InputBox>
            <InputBox>
              <Label htmlFor="levelInput">Level</Label>
              <TextInput id="levelInput" type="text"></TextInput>
            </InputBox>
          </Fieldset>
        </InputGroup>
        <SubmitButton type="submit" value="submit" />
      </Form>
    </FormContainer>
  );
};

export default FormTemplate;
