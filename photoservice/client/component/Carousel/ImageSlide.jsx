import React from 'react';
// import { Image } from './styled.imageslide.js';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: auto;
  margin: auto;
`;

const ImageSlide = ({ photo }) => {
  return <Image src={photo.url}></Image>;
};

export default ImageSlide;
