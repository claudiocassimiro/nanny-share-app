import styled from 'styled-components';
import image from '../../img/Image.svg';
import gradient from '../../img/Gradient.svg';

const HeaderStyle = styled.header`
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: 616px;
  background-image: url(${image}), url(${gradient});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionHeaderUp = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & img {
    align-self: flex-start;
    margin-left: 20px;
  }
`;

export const NavBar = styled.nav`
  margin-right: 500px;
  width: 500px;
`;

export const ContainerMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  & li {
    padding: 0.5rem;
  }
  & a {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
  }
`;

export const ContainerBecomeButton = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 350px;
  & button {
    background-color: #00A870;
    border: none;
    border-radius: 5px;
    color: #fff;
    width: 234px;
    height: 44px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #00C88C;
    }
  }
  & a {
    color: #fff;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    margin-right: 20px;
  }
`;

export const SectionHeaderDown = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 70px;
`;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  & h1 {
    color: #fff;
    width: 514px;
    height: 80px;
    font-size: 40px;
    line-height: 48px;
  }
  & p {
    color: #fff;
    width: 584px;
    height: 48px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 300px;
  & a {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContainerImage = styled.article`
  margin-top: 30px;
`;

export default HeaderStyle;
