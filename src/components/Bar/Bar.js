import styled from 'styled-components';

const StyledBar = styled.div`
  width: 15%;
  height: ${(props) => props.height + '%'};
  background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
  border-radius: 0.25rem 0.25rem 0 0;
`;

function Bar(props) {
  return <StyledBar height={props.height} />;
}

export default Bar;
