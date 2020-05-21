import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  position: fixed;
  height: 100vh;
  width: 288px;
  top: 0;
  left: 0;
  background-color: #059d42;
  z-index: 10000;

  @media (max-width: 768px) {
    height: 60px;
    width: 100%;
    flex-direction: row;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  justify-content: center;

  img {
    width: 200px;
    margin: 30px 0;

    &.menu {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    justify-content: space-between;

    img {
      width: 93px;
      margin: 0;

      &.menu {
        display: block;
        width: 32px;
        margin-left: 22px;
        cursor: pointer;
      }
    }
  }
`;

interface NavLinkListProps {
  visible: boolean;
}

export const NavLinkList = styled.div<NavLinkListProps>`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0 0 22px 22px;
  background-color: #059d42;

  ul {
    list-style: none;

    li {
      & + li {
        margin-top: 8px;
      }

      a {
        color: #ffffff;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  strong {
    color: #93ffe8;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    margin-top: 23px;

    & + ul {
      margin-top: 11px;
    }
  }

  @media (max-width: 768px) {
    & {
      display: ${props => (props.visible ? 'flex' : 'none')};
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  margin-left: 288px;
  padding: 29px 24px;

  & > div {
    max-width: 905px;
    margin: 0 auto;

    h1 {
      font-size: 29px;
      font-weight: 900;
      line-height: 33px;
      margin-bottom: 66px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-left: auto;
  }
`;
