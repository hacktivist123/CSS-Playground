/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from 'styled-components'

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Nav from './Nav'
import backgroundImage from '../assets/img/hero.jpg'
import Button from '../components/Button'

const HeaderDiv = () => (
  <main>
    <Header>
      <img
        src={backgroundImage}
        alt="header background"
        style={{ display: 'none' }}
      />
      <Nav />
      <div className="heading-container">
        <div className="heading">
          <div className="main-heading">outdoors</div>
          <div className="sub-heading">is where life happens</div>
        </div>
        <Button label="discover our tours" color="white" href="#" animated />
      </div>
    </Header>
  </main>
)

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

  .heading-container {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    color: #ffff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;
  }

  .main-heading {
    display: block;
    font-size: 70px;
    font-weight: 400;
    letter-spacing: 35px;
    animation: 1s moveInLeft;
  }

  .sub-heading {
    display: block;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 17.4px;
    animation: 1s moveInRight;
  }

  /* animation moveInLeft */
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  /* animation moveInRight */
  @keyframes moveInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`
export default HeaderDiv
