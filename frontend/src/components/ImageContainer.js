import React from 'react';
import styled  from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function ImageContainer (props) {
  return <Div data-component="ImageContainer"><Image className="image" alt="" src={props.url}/></Div>;
}
