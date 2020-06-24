import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => (
  <ButtonStyle className={props.className} onClick={props.handleClick}>
    {props.icon} {props.label}
  </ButtonStyle>
);

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

const ButtonStyle = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  background-color: #55c57a;
  color: #fff;
  outline: none;
`;

export default Button;
