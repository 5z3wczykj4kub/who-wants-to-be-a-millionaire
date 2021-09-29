import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Backdrop(props) {
  return <StyledBackdrop onClick={props.onClick} />;
}

export default Backdrop;
