import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 300px;
  min-height: 200px;
  padding: 10px;
  opacity: ${props => props.transparency};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
`;

const Title = styled.h5`
  color: #888888;
  padding: 0;
  margin: 10px;
  align-self: flex-start;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 600;
  font-family: ui-sans-serif;
`;

function Card(props) {
  const { children, title, ...rest } = props;

  return (
    <WrapperDiv {...rest}>
      <Title>{title}</Title>
      {children}
    </WrapperDiv>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  transparency: PropTypes.number,
};

Card.defaultProps = {
  color: '#242424',
  bgColor: '#fff',
  title: '',
  transparency: 1,
}

export default Card;