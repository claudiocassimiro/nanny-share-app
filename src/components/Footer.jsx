import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
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
  const size = useWindowSize();
  
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
        <a href="#void">Or browse local nanny-shares</a>
      </Article1>
      <Article2>
        <img src={HapuLogo} alt="app logo" />
        <nav>
          <a href="#void">Share Your Nanny</a>
          <a href="#void">Our Story</a>
          <a href="#void">Blog</a>
          <a href="#void">Terms & Privacy</a>
        </nav>
        <div>
          <img src={InstagramLogo} alt="instagram logo" />
          <img src={FacebookLogo} alt="facebook logo" />
          <img src={TwitterLogo} alt="twitter logo" />
        </div>
      </Article2>
      { size.width <= 500 && (
        <hr />
      ) }
      <ParagraphCopyright>Copyright © 2017 Hapu PTY Limited All rights reserved</ParagraphCopyright>
    </FooterStyle>
  );
}

export default Footer;