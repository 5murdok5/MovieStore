import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
 border: 6px solid #f3f3f300; 
  border-top: 6px solid #ff3d3d; 
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  animation: ${rotate} 2s linear infinite;

`
