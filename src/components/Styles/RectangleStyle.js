import styled from 'styled-components';

const MainStyle = styled.main`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 216px;
  }
  border: 1px solid #DFDFDF;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 112px;
  & img {
    margin-right: 20px;
  }
  & a {
    @media (max-width: 500px) {
      width: 212px;
      height: 40px;
      text-align: center;
    }
    margin-right: 5px;
    color: #5E20A4;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  & p {
    @media (max-width: 500px) {
      width: 286px;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
    }
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default MainStyle;
