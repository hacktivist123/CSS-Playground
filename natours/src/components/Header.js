import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/hero.jpg';

const HeaderDiv = () => <Header>hello world</Header>;

const Header = styled.header`
  height: 95vh;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
export default HeaderDiv;
