import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => (
  <ButtonStyle
    className={props.className}
    onClick={props.handleClick}
    color={props.color}
    href={props.href}
  >
    {props.icon} {props.label}
  </ButtonStyle>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

const ButtonStyle = styled.a`
  :link,
  :visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    position: relative;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    border: none;
    cursor: pointer;
    background-color: ${(props) =>
      props.color === 'white' ? '#ffff' : '#55c57a'};
    color: ${(props) => (props.color === 'white' ? '#777' : '#ffff')};
    outline: none;
    transition: all 0.2s;
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
