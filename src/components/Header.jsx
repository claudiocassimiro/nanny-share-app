import React from 'react';
import logo from '../img/logo.svg';
import playButton from '../img/playButton.svg';
import imageHeader from '../img/ImageHeader.svg';
import HeaderStyle, {
  SectionHeaderUp,
  NavBar,
  ContainerMenu,
  ContainerBecomeButton,
  SectionHeaderDown,
  ArticleContainer,
  PlayerContainer,
  ContainerImage,
} from './Styles/HeaderStyle';

const Header = () => {
  return (
    <HeaderStyle className="hero">
      <SectionHeaderUp className="header">
        <img src={logo} alt="logo" />
        <NavBar>
          <ContainerMenu>
            <li><a href="#">Create Your Nanny Share</a></li>
            <li><a href="#">Browse Shares</a></li>
            <li><a href="#">Our Story</a></li>
          </ContainerMenu>
        </NavBar>
        <ContainerBecomeButton>
          <button type="button">Become a Nanny Share Host</button>
          <a href="#">Sing In</a>
        </ContainerBecomeButton>
      </SectionHeaderUp>
      <SectionHeaderDown>
        <ArticleContainer>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
          <PlayerContainer>
            <img src={playButton} alt="button play" />
            <a href="#">See hapu in action (27 seconds)</a>
          </PlayerContainer>
        </ArticleContainer>
        <ContainerImage>
          <img src={imageHeader} alt="app demo" />
        </ContainerImage>
      </SectionHeaderDown>
    </HeaderStyle>
  );
}

export default Header;
