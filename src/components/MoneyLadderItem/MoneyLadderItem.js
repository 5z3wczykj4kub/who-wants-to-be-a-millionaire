import styled from 'styled-components';

const StyledMoneyLadderItem = styled.li`
  padding: 0.25rem;

  &:nth-of-type(1),
  &:nth-of-type(6),
  &:nth-of-type(11) {
    color: ${(props) => (!props.isActive ? '#fff' : '')};
  }

  background-color: ${(props) =>
    props.isActive ? props.theme.hoverAnwserColor : 'transparent'};
  color: ${(props) => (props.isActive ? '#000' : '')};
  border-radius: ${(props) => (props.isActive ? '3px' : 'none')};

  span {
    display: inline-block;
    &:first-of-type {
      width: 3.5rem;
    }
  }
`;

function MoneyLadderItem(props) {
  return (
    <StyledMoneyLadderItem isActive={props.isActive}>
      {props.children}
    </StyledMoneyLadderItem>
  );
}

export default MoneyLadderItem;
