import styled from 'styled-components';

const StyledMoney = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 8rem;
  padding: 0.2rem 0;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.hoverAnwserColor};
  color: #000;
  cursor: pointer;
  transition: transform 50ms;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`;

function Money(props) {
  return (
    <StyledMoney onClick={props.toggleSidedrawer}>{props.children}</StyledMoney>
  );
}

export default Money;
