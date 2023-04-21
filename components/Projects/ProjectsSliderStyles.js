import styled, { keyframes } from "styled-components";
const marquee = keyframes`
from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;
export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  animation: ${marquee} 2s linear infinite;
  //   position: absolute;
  white-space: nowrap;
  will-change: transform;
  width: 80%;
  &:hover {
    animation-play-state: paused;
  }
`;
export const SliderImageContainer = styled.div`
  flex: 0.5;
`;
