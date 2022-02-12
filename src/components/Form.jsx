import React, { useState, useEffect } from 'react';
import { FormStyle } from './Style/MainContentsStyle';
import sendDataToNewsletter from '../services/sendDataToNewsletter';

function Form() {
  const [enableButton, setEnableButton] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  useEffect(() => {
    if (inputName.length >= 3 && inputEmail.length >= 16) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [inputName, inputEmail]);

  const onSubmitForm = () => {
    const name = inputName;
    const email = inputEmail;

    sendDataToNewsletter({ name, email });

    setInputName('');
    setInputEmail('');
  };

  return (
    <FormStyle onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="inputName"
        value={inputName}
        placeholder="Your name"
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        name="inputEmail"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={enableButton}
        onClick={onSubmitForm}
      >
        Send
      </button>
    </FormStyle>
  );
}

export default Form;
