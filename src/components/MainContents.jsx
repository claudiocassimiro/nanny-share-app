import React, { useState, useEffect } from 'react';
import ImageAppDemo from '../img/ImageSection1.svg';
import MainStyle, {
  SectionAppDemo,
  ContainerTextAppDemo,
  SectionNewsletter,
  ArticleNewsletter,
  Form,
} from './Style/MainContentsStyle';
import sendDataToNewsletter from '../services/sendDataToNewsletter';

const MainContents = () => {
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
    <MainStyle>
      <SectionAppDemo>
        <ContainerTextAppDemo>
          <h2>Share your home,<br />nanny and costs</h2>
          <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
          <a href="#">Ready to get started?</a>
        </ContainerTextAppDemo>
        <article>
          <img src={ImageAppDemo} alt="Image app demo" /> 
        </article>
      </SectionAppDemo>
      <hr />
      <SectionNewsletter>
        <ArticleNewsletter>
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
        </ArticleNewsletter>
        <Form onSubmit={(e) => e.preventDefault()}>
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
        </Form>
      </SectionNewsletter>
      <hr />
    </MainStyle>
  );
};

export default MainContents;
