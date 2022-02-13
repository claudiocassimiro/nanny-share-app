import React from 'react';
import ImageAppDemo from '../img/ImageSection1.svg';
import ImageSection3 from '../img/ImageSection3.svg';
import ImageSection4 from '../img/ImageSection4.svg';
import ImageSection5 from '../img/ImageSection5.svg';
import MainStyle, {
  SectionAppDemo,
  ArticleTextAppDemo,
  SectionNewsletter,
  ArticleNewsletter,
  SectionPrices,
  ArticlePaymantText,
  SectionFramework,
  SectionDailyDiare,
} from './Styles/MainContentsStyle';
import Form from './Form';

const MainContents = () => {

  return (
    <MainStyle>
      <SectionAppDemo>
        <ArticleTextAppDemo>
          <h2>Share your home,<br />nanny and costs</h2>
          <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
          <a href="#">Ready to get started?</a>
        </ArticleTextAppDemo>
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
        <Form />
      </SectionNewsletter>
      <hr />
      <SectionPrices>
        <article>
          <img src={ImageSection3} alt="Prices" />
        </article>
        <ArticlePaymantText>
          <h2>Shared payments made simple</h2>
          <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
          <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
        </ArticlePaymantText>
      </SectionPrices>
      <hr />
      <SectionFramework>
        <h2>A framework built for the long term</h2>
        <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
        <a href="#">Read how Hapu’s tribal background defines our app </a>
        <img src={ImageSection4} alt="Nanny interface" />
      </SectionFramework>
      <hr />
      <SectionDailyDiare>
        <img src={ImageSection5} alt="Hupu daily diary" />
        <h2>Coming soon: Nanny Share Daily Diary!</h2>
        <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
      </SectionDailyDiare>
    </MainStyle>
  );
};

export default MainContents;
