import { keyframes } from 'styled-components';

const logoFloatAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;

export default logoFloatAnimation;
