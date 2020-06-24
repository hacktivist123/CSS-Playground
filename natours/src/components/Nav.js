import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo-white.png';

const Nav = () => {
  return (
    <LogoContainer>
      <Logo src={logo} alt="logo" />
      <Hamburger></Hamburger>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;
const Logo = styled.img`
  height: 35px;
`;

const Hamburger = styled.div``;

export default Nav;
