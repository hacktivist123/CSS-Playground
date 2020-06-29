import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo-white.png';

const Nav = (props) => {
  return (
    <LogoContainer>
      <Logo src={logo} alt="logo" />
      <HamburgerContainer onClick={props.onClick}></HamburgerContainer>
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

const HamburgerContainer = styled.div``;

export default Nav;
