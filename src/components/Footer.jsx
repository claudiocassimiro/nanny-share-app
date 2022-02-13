import React from 'react';
import HapuLogo from '../img/HapuLogo.svg';
import Union from '../img/Union.svg';
import InstagramLogo from '../img/Instagram.svg';
import FacebookLogo from '../img/Facebook.svg';
import TwitterLogo from '../img/Twitter.svg';
import FooterStyle, {
  Article1,
  Article2,
  ParagraphCopyright,
} from './Styles/FooterStyle';

function Footer() {
  
  return (
    <FooterStyle>
      <Article1>
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <button type="button">
          <img src={Union} alt="icon calendar" />
          <div>
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>
        <a href="#">Or browse local nanny-shares</a>
      </Article1>
      <Article2>
        <img src={HapuLogo} alt="app logo" />
        <nav>
          <a href="#">Share Your Nanny</a>
          <a href="#">Our Story</a>
          <a href="#">Blog</a>
          <a href="#">Terms & Privacy</a>
        </nav>
        <div>
          <img src={InstagramLogo} alt="instagram logo" />
          <img src={FacebookLogo} alt="facebook logo" />
          <img src={TwitterLogo} alt="twitter logo" />
        </div>
      </Article2>
      <ParagraphCopyright>Copyright © 2017 Hapu PTY Limited All rights reserved</ParagraphCopyright>
    </FooterStyle>
  );
}

export default Footer;