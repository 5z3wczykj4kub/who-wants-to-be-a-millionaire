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
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
`;

function Lifeline(props) {
  return (
    <StyledLifeline>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : '50:50'}
    </StyledLifeline>
  );
}

export default Lifeline;
