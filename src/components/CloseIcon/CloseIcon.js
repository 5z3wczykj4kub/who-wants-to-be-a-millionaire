import styled from 'styled-components';

const StyledCloseIcon = styled.button`
  box-sizing: content-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: rotate(-90deg);
    }
  }

  span {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 0.25rem;
      background-color: ${(props) =>
        props.color ? props.color : props.theme.primaryColor};
      border-radius: 0.25rem;
    }

    &::before {
      top: 0;
      transform: translateY(1rem) rotate(45deg);
    }

    &::after {
      bottom: 0;
      transform: translateY(-1rem) rotate(-45deg);
    }
  }
`;

function CloseIcon(props) {
  return (
    <StyledCloseIcon color={props.color} onClick={props.onClick}>
      <span></span>
    </StyledCloseIcon>
  );
}

export default CloseIcon;
