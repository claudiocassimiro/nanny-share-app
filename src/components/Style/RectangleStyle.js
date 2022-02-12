import styled from 'styled-components';

const MainStyle = styled.main`
  border: 1px solid #DFDFDF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 112px;
  & img {
    margin-right: 20px;
  }
  & a {
    margin-right: 5px;
    color: #5E20A4;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  & p {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export default MainStyle;
