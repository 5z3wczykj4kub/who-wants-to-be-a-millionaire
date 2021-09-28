import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  max-width: 14rem;
  margin: 0.25rem auto 0 auto;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: 1rem;
  font-size: 1.2rem;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;
