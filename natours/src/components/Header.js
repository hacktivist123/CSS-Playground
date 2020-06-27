import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from './Nav';
import backgroundImage from '../assets/img/hero.jpg';
import Button from '../components/Button';

const HeaderDiv = () => (
  <main>
    <Header>
      <Nav />
      <HeadingBox>
        <Heading>
          <HeadingMain>outdoors</HeadingMain>
          <HeadingSub>is where life happens</HeadingSub>
        </Heading>
        <Button
          label="discover our tours"
          color="white"
          href="#"
          animated={true}
        />
      </HeadingBox>
    </Header>
  </main>
);

const Header = styled.header`
  position: relative;
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

const HeadingBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Heading = styled.h1`
  color: #ffff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 60px;
`;

//animation moveInLeft
const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px)
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }

`;

const HeadingMain = styled.span`
  display: block;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 35px;
  animation: 1s ${moveInLeft};
`;

//animation moveInRight
const moveInRight = keyframes`
 0% {
   opacity: 0;
   transform: translateX(100px);
 }

 80% {
    transform: translateX(-10px)
  }
 
 100% {
   opacity: 1;
   transform: translate(0);
 }

`;
const HeadingSub = styled.span`
  display: block;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation: 1s ${moveInRight};
`;

export default HeaderDiv;
