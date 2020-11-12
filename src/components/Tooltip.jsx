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

const commonContentStyle = `
  visibility: hidden;
  width: 120px;
  background-color: rgba(245, 245, 245, 0.5);
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  font-size: 15px;
  position: absolute;
  z-index: 1;`;

const ContentBottom = styled.span`
  ${commonContentStyle}
  top: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
`;

const ContentTop = styled.span`
  ${commonContentStyle}  
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
`;

const ContentRight = styled.span`
  ${commonContentStyle}  
  top: -5px;
  left: 105%;
`;

const ContentLeft = styled.span`
  ${commonContentStyle}  
  top: -5px;
  right: 105%;
`;

function Tooltip(props) {
  const { content, children, position } = props;

  const getContentByPosition = () => {
    switch(position) {
      case 'top': 
        return (<ContentTop>{content}</ContentTop>);
      case 'left':
        return (<ContentLeft>{content}</ContentLeft>);
      case 'right': 
        return  (<ContentRight>{content}</ContentRight>);
      default:
    return (<ContentBottom>{content}</ContentBottom>)
    }
  }

  return (
    <Wrapper>
      {children}
      {getContentByPosition()}
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