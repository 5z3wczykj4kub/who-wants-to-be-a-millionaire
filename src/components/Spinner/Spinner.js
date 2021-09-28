import styled from 'styled-components';

import spinnerAnimation from '../../utils/spinnerKeyframes';

const StyledSpinner = styled.span`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border: 3px solid #fff;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinnerAnimation} 2s infinite;
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
