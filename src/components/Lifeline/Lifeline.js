import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLifeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 3.5rem;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondaryColor};
  opacity: ${(props) => (props.isFiftyFiftyLifelineDisabled ? '0.5' : '1')};
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  transition: transform 50ms;
  cursor: ${(props) =>
    !props.isFiftyFiftyLifelineDisabled ? 'pointer' : 'default'};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: ${(props) =>
        !props.isFiftyFiftyLifelineDisabled ? 'scale(1.1)' : 'scale(1)'};
    }
  }
`;

function Lifeline(props) {
  return (
    <StyledLifeline
      isFiftyFiftyLifelineDisabled={props.isFiftyFiftyLifelineDisabled}
      isFiftyFiftyLifelineUsed={props.isFiftyFiftyLifelineUsed}
      onClick={props.onClick}
    >
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : '50:50'}
    </StyledLifeline>
  );
}

export default Lifeline;
