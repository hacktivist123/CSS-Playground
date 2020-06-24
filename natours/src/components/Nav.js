import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo-white.png';

const Nav = () => {
  return (
    <div>
      <Logo src={logo} alt="" srcset="" />
      <Hamburger></Hamburger>
    </div>
  );
};

const Logo = styled.img`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.div``;

export default Nav;
