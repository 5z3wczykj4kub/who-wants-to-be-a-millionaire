import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  max-width: 14rem;
  margin: 0.5rem auto 0 auto;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 50ms;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;
