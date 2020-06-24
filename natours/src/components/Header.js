import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/hero.jpg';

const HeaderDiv = () => <Header>hello world</Header>;

const Header = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;
export default HeaderDiv;
