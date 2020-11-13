import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  &:hover span {
    visibility: visible;    
  }
`;

const ContentContainer = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: rgba(245, 245, 245, 0.5);
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  font-size: 15px;
  position: absolute;
  z-index: 1;
  top:  ${props => (props.position === 'bottom' && '100%')
   || ((props.position === 'right' || props.position === 'left') && '-5px') || '' };
  bottom:  ${props => props.position === 'top' ? '100%' : ""};
  left: ${
    props => ((props.position === 'bottom' || props.position === 'top') && '50%')
      || (props.position === 'right' && '105%')
      || ''
  };
  right: ${props => props.position === 'left' ? '105%' : ''};
  margin-left: ${
    props => props.position === 'bottom' || props.position === 'top' ? "-60px" : ""/* Use half of the width (120/2 = 60), to center the tooltip */
  }; 
`;


function Tooltip(props) {
  const { content, children, position } = props;

  return (
    <Wrapper>
      {children}
      <ContentContainer position={position}>
        {content}
      </ContentContainer>
    </Wrapper>
  );
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.string,
}

Tooltip.defaultProps = {
  position: 'top',
}

export default Tooltip;