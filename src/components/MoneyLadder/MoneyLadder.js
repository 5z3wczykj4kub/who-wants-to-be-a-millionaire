import styled from 'styled-components';

import moneyArray from '../../utils/money';
import CloseIcon from '../CloseIcon/CloseIcon';
import MoneyLadderItem from '../MoneyLadderItem/MoneyLadderItem';

const reversedMoneyArray = [...moneyArray].reverse();

const StyledMoneyLadder = styled.ul`
  margin-top: 3rem;
  padding: 1rem;
  padding-top: 0;
  color: ${(props) => props.theme.hoverAnwserColor};
  font-size: 1.4rem;
  list-style: none;
`;

function MoneyLadder(props) {
  return (
    <StyledMoneyLadder>
      <CloseIcon color="#fff" onClick={props.toggleSidedrawer} />
      {reversedMoneyArray.map((money, index) => (
        <MoneyLadderItem
          isActive={props.money === reversedMoneyArray[index]}
          key={index}
        >
          <span>{15 - index}</span>
          <span>${money}</span>
        </MoneyLadderItem>
      ))}
    </StyledMoneyLadder>
  );
}

export default MoneyLadder;
