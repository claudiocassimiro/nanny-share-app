import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
`;

export const Article1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  margin-top: 80px;
  & h2 {
    color: #3D3D3D;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
  }
  & p {
    color: #3D3D3D;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 32px;
  }
  & button {
    border-radius: 4px;
    border: none;
    background-color: #5E20A4;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 304px;
    height: 68px;
    margin-bottom: 24px;
    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & span:nth-child(1) {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
      }
      & span:nth-child(2) {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
  & a {
    color: #5E20A4;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const Article2 = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 60px 0;
  & nav {
    margin-left: 100px;
    display: flex;
    justify-content: space-around;
    width: 450px;
    & a {
      color: #3D3D3D;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-decoration: none;
    }
  }
  & div {
    width: 170px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ParagraphCopyright = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #3D3D3D;
  margin-bottom: 32px;
`;

export default FooterStyle;
