import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => (
  <ButtonStyle
    className={props.className}
    onClick={props.handleClick}
    color={props.color}
    href={props.href}
    animated={props.animated}
  >
    {props.icon} {props.label}
  </ButtonStyle>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  animated: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

//animation moveInBottom
const moveInBottom = keyframes`
 0% {
   opacity: 0;
   transform: translateY(40px);
 }

 
 100% {
   opacity: 1;
   transform: translate(0);
 }

`;

const ButtonStyle = styled.a`
  :link,
  :visited {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    position: relative;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    border: none;
    cursor: pointer;
    background-color: ${(props) =>
      props.color === 'white' ? '#ffff' : '#55c57a'};
    color: ${(props) => (props.color === 'white' ? '#777' : '#ffff')};
    outline: none;
    transition: all 0.2s;
    backface-visibility: hidden;
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  ::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  ::after {
    background-color: #ffff;
  }
  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
  ${(props) =>
    props.animated === 'true'
      ? css`
          animation: 0.5s ${moveInBottom} ease-out 0.75s;
          animation-fill-mode: backwards;
        `
      : css`
          animation: none;
        `};
`;

export default Button;
