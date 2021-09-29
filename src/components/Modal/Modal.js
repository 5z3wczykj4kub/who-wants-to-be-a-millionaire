import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 30rem;
  padding: 0.5rem;
  padding-bottom: 1rem;
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
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
  }
`;

function Modal(props) {
  return (
    <StyledModal isGameWon={props.isGameWon}>
      <div>{props.children}</div>
    </StyledModal>
  );
}

export default Modal;
