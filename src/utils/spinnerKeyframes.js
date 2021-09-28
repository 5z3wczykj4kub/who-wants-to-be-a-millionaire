import { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default spinnerAnimation;
