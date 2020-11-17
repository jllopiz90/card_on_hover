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
  background-color: rgba(245, 245, 245, 0.5);
  color: black;
  text-align: center;
  padding: ${props => props.noPadding ? '0' : '5px 0'};
  border-radius: 6px;
  font-size: 15px;
  position: absolute;
  z-index: 1;
  top:  ${props => (props.position === 'bottom' && '100%')
   || ((props.position === 'right' || props.position === 'left') && '-75px') || '' };
  bottom:  ${props => (props.position === 'top' && '100%') || ""};
  left: ${
    props => ((props.position === 'bottom' || props.position === 'top') && '50%')
      || (props.position === 'right' && '105%')
      || ''
  };
  right: ${props => props.position === 'left' ? '105%' : ''};
  margin-left: ${
    props => props.position === 'bottom' || props.position === 'top' ? "-60px" : ""/* Use half of the width (120/2 = 60), to center the tooltip */
  };
  @media (min-width: 767px) and (max-width: 770px) {
    right: ${props => props.position === 'left' ? '-25%' : ''} 
  }
  @media (max-width: 321px){
    right: ${props => props.position === 'top' ? '55%' : ''};
    margin-left: ${
    props => props.position === 'bottom' || props.position === 'top' ? "-100px" : ""/* Use half of the width (120/2 = 60), to center the tooltip */
  };
  }
`;


function Tooltip(props) {
  const { content, children, ...rest } = props;

  return (
    <Wrapper>
      {children}
      <ContentContainer {...rest}>
        {content}
      </ContentContainer>
    </Wrapper>
  );
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.string,
  noPadding: PropTypes.bool,
  isMobile: PropTypes.bool,
}

Tooltip.defaultProps = {
  position: 'top',
  noPadding: false,
  isMobile: false,
}

export default Tooltip;