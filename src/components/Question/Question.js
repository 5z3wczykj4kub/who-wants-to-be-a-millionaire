import styled from 'styled-components';

import Money from '../Money/Money';

const StyledQuestion = styled.div`
  position: relative;
  width: calc(100% - 0.5rem);
  margin: 1.5rem 0.25rem 0.5rem 0.25rem;
  padding: 0.75rem;
  padding-top: 1.5rem;
  border: 2px solid #fff;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
`;

function Question(props) {
  return (
    <StyledQuestion>
      <Money toggleSidedrawer={props.toggleSidedrawer}>{props.money}</Money>
      {props.isLoading ? (
        <p>{props.children}</p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: props.children }}></p>
      )}
    </StyledQuestion>
  );
}

export default Question;
