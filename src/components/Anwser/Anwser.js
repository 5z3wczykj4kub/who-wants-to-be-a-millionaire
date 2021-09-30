import { useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as Diamond } from '../../assets/svg/diamond.svg';

const StyledAnwser = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: calc(100% - 0.5rem);
  margin: 0.25rem;
  padding: 0.5rem;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.isCorrectHighlighted
      ? props.theme.correctAnwserColor
      : props.theme.secondaryColor};
  color: ${(props) => (props.isCorrectHighlighted ? '#000' : '#fff')};
  cursor: ${(props) => (!props.isEmpty ? 'pointer' : 'default')};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.isEmpty
          ? !props.isCorrectHighlighted
            ? props.theme.hoverAnwserColor
            : props.theme.correctAnwserColor
          : ''};
      color: #000;

      span {
        color: #000;
      }
    }
  }

  span {
    visibility: ${(props) => (props.isEmpty ? 'hidden' : 'visible')};
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props) =>
      props.isCorrectHighlighted ? '#000' : props.theme.anwserLetterColor};
  }
`;

function Anwser(props) {
  const { remainingIncorrectAnwserIndex, getRemainingIncorrectAnwserIndex } =
    props;

  useEffect(() => {
    if (
      remainingIncorrectAnwserIndex !== null &&
      remainingIncorrectAnwserIndex !== undefined
    ) {
      getRemainingIncorrectAnwserIndex(remainingIncorrectAnwserIndex);
    }
  }, [remainingIncorrectAnwserIndex, getRemainingIncorrectAnwserIndex]);

  return (
    <StyledAnwser
      isEmpty={props.isEmpty}
      isCorrectHighlighted={props.isCorrectHighlighted}
      onClick={() => {
        if (props.isEmpty) return;
        props.checkAnwser(props.children);
      }}
    >
      {!props.isEmpty && <Diamond />}
      <span>{props.letter}:</span>
      {props.isLoading ? (
        <p>{props.children}</p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: props.children }}></p>
      )}
    </StyledAnwser>
  );
}

export default Anwser;
