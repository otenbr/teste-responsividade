import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';

import { Container, Nav, NavHeader, NavLinkList, Main } from './styles';

import CardList from '../../components/CardList';

const Home: React.FC = () => {
  const [navListVisible, setNavListVisible] = useState(false);

  const toggleMenu = (): void => {
    setNavListVisible(!navListVisible);
  };

  return (
    <Container>
      <Nav>
        <NavHeader>
          <img
            className="menu"
            src={menu}
            alt="menu"
            onClick={() => toggleMenu()}
          />
          <img src={logo} alt="logo" />
          <span />
        </NavHeader>
        <NavLinkList visible={navListVisible}>
          <ul>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
          </ul>
          <strong>Submenu</strong>
          <ul>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
          </ul>
          <strong>Submenu</strong>
          <ul>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
          </ul>
        </NavLinkList>
      </Nav>
      <Main>
        <div>
          <h1>Pessoas que vão ganhar dinheiro</h1>
          <CardList />
        </div>
      </Main>
    </Container>
  );
};
export default Home;
