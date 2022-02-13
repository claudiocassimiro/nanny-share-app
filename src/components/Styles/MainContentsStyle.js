import styled from 'styled-components';

const MainStyle = styled.main`
  background-color: #DFDFDF;
  font-family: Inter, sans-serif;
  height: 100%;
  & hr {
    @media (max-width: 500px) {
      width: 90%;
    }
    width: 50%;
  }
`;

export const SectionAppDemo = styled.section`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
  display: flex;
  justify-content: space-evenly;
  margin: 100px 0;
`;

export const ArticleTextAppDemo = styled.article`
  display: flex;
  flex-direction: column;
  & h2 {
    @media (max-width: 500px) {
      width: 218px;
      height: 64px;
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      align-self: center;
    }
    color: #3D3D3D;
    width: 429px;
    height: 64px;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
  }
  & p {
    @media (max-width: 500px) {
      width: 328px;
      height: 308px;
      text-align: center;
    }
    color: #4A4A4A;
    width: 444px;
    height: 224px;
    text-align: left;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    & a {
      color: #5E20A4;
      font-weight: bold;
    }
  }
  & a {
    @media (max-width: 500px) {
      text-align: center;
    }
    margin-top: 15px;
    color: #5E20A4;
    font-weight: bold;
  }
`;

export const SectionNewsletter = styled.section`
  @media (max-width: 500px) {
    margin: 30px 0;
  }
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleNewsletter = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & h3 {
    @media (max-width: 500px) {
      width: 328px;
      height: 40px;
      font-size: 24px;
    }
    color: #3D3D3D;
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
  }
  & p {
    @media (max-width: 500px) {
      width: 328px;
      height: 84px;
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 32px;
    }
    color: #3D3D3D;
    font-size: 18px;
    line-height: 24px;
    font-weight: normal;
  }
`;

export const FormStyle = styled.form`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 100%;
  }
  display: flex;
  margin-bottom: 40px;
  justify-content: space-evenly;
  align-items: center;
  width: 48%;
  height: 50px;
  & input {
    @media (max-width: 500px) {
      width: 90%;
      height: 48px;
      margin-bottom: 10px;
    }
    width: 232px;
    font-size: 14px;
    font-weight: normal;
    padding-left: 15px;
    line-height: 20px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #DFDFDF;
  }
  & button {
    @media (max-width: 500px) {
      width: 95%;
      margin-top: 10px;
    }
    width: 96px;
    color: #fff;
    height: 40px;
    background-color: #00A870;
    border-radius: 4px;
    border: none;
    &:enabled {
      cursor: pointer;
      &:hover {
        background-color: #00B870;
      }
    }
  }
`;

export const SectionPrices = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 80px 0;
  & article {
    & img {
      margin-top: 30px;
    }
  }
`;

export const ArticlePaymantText = styled.article`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  & h2 {
    width: 411px;
    height: 32px;
    color: #3D3D3D;
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  & p {
    width: 450px;
    height: 140px;
    color: #3D3D3D;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 40px;
    text-align: justify;
  }
  & a {
    color: #5E20A4;
  }
`;

export const SectionFramework = styled.section`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & h2 {
    width: 469px;
    height: 32px;
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    color: #3D3D3D;
  }
  & p {
    width: 784px;
    height: 84px;
    font-size: 16px;
    line-height: 28px;
    color: #3D3D3D;
    margin-bottom: 30px;
  }
  & a {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #5E20A4;
    margin-bottom: 40px;
  }
`;

export const SectionDailyDiare = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  text-align: center;
  & h2 {
    width: 522px;
    height: 32px;
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    color: #3D3D3D;
  }
  & p {
    width: 784px;
    height: 84px;
    font-size: 16px;
    line-height: 28px;
    font-weight: normal;
    color: #3D3D3D;
  }
`;

export default MainStyle;