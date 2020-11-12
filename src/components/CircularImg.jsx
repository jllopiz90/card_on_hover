import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyles = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
`;

function CircularImg(props) {
  const { src, alt } = props;
  return <ImageStyles src={src}  alt={alt} />
}

CircularImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

CircularImg.defaultProps = {
  alt: 'alt text',
}

export default CircularImg;