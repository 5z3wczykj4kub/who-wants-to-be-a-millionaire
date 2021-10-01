import styled from 'styled-components';

const StyledSidedrawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 20rem;
  background-color: ${(props) => props.theme.primaryColor};
  transform: ${(props) =>
    props.isSidedrawerVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
`;

function Sidedrawer(props) {
  return (
    <StyledSidedrawer isSidedrawerVisible={props.isSidedrawerVisible}>
      {props.children}
    </StyledSidedrawer>
  );
}

export default Sidedrawer;
