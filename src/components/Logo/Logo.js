import styled from 'styled-components';

import logo from '../../assets/png/logo.png';
import logoFloatAnimation from '../../utils/logoFloatKeyframes';

const StyledLogo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -2;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 30rem;

  img {
    width: 100%;
    animation: ${logoFloatAnimation} 5s infinite;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="who wants to be a millionaire logo" />
    </StyledLogo>
  );
}

export default Logo;
