import React from 'react';
import profileImage from '../img/ProfileImage.svg';
import MainStyle from './Style/RectangleStyle';

const Rectangle = () => {
  
  return (
    <MainStyle>
      <img src={profileImage} alt="profile Image" />
      <a href="#">Sarah’s day care available now in North Sydney</a>
      <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </MainStyle>
  );
};

export default Rectangle;
