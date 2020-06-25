import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => (
  <ButtonStyle
    className={props.className}
    onClick={props.handleClick}
    color={props.color}
  >
    {props.icon} {props.label}
  </ButtonStyle>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

const ButtonStyle = styled.button`
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
  color: ${(props) => (props.color === 'white' ? '#7777' : '#ffff')};
  outline: none;
`;

export default Button;
