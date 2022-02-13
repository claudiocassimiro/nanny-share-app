import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import Rectangle from '../components/Rectangle';
import MainStyle from './Styles/LandPageStyle';

const LandingPage = () => {

  return (
    <MainStyle>
      <Header />
      <Rectangle />
      <MainContents />
      <Footer />
    </MainStyle>  
  )
}

export default LandingPage;
