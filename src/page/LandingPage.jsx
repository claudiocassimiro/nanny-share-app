import React from 'react';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import Rectangle from '../components/Rectangle';
import MainStyle from './Style/LandPageStyle';

const LandingPage = () => {

  return (
    <MainStyle>
      <Header />
      <Rectangle />
      <MainContents />
    </MainStyle>  
  )
}

export default LandingPage;
