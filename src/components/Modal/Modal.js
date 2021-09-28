import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import Button from '../Button/Button';
import CloseIcon from '../CloseIcon/CloseIcon';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 50rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.hoverAnwserColor};
  border-radius: 0.25rem;
  text-align: center;

  div {
    margin-top: 2.5rem;
    font-size: 1.2rem;
  }

  span {
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: ${(props) => (props.isGameWon ? '20rem' : '14rem')};
    max-height: 14rem;
    border-radius: 0.25rem;
  }
`;

function Modal(props) {
  return (
    <StyledModal isGameWon={props.isGameWon}>
      <CloseIcon closeEndgameModal={props.closeEndgameModal} />
      <div>{props.children}</div>
      <Button onClick={props.closeEndgameModal}>
        <FontAwesomeIcon icon={faUndoAlt} />
        Play again
      </Button>
    </StyledModal>
  );
}

export default Modal;
