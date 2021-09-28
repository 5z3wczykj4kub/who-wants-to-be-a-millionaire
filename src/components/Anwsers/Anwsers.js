import { useMemo } from 'react';
import styled from 'styled-components';

import Anwser from '../Anwser/Anwser';
import Spinner from '../Spinner/Spinner';

import fisherYatesShuffle from '../../utils/fisherYatesShuffle';

const StyledAnwsers = styled.div`
  width: 100%;
`;

function Anwsers(props) {
  const anwsers = useMemo(() => {
    if (!props.isLoading) {
      return fisherYatesShuffle([
        ...props.incorrectAnwsers,
        props.correctAnwser,
      ]);
    }
  }, [props.isLoading, props.incorrectAnwsers, props.correctAnwser]);

  let anwsersList = (
    <>
      <Anwser letter="a" isLoading={props.isLoading}>
        <Spinner />
      </Anwser>
      <Anwser letter="b" isLoading={props.isLoading}>
        <Spinner />
      </Anwser>
      <Anwser letter="c" isLoading={props.isLoading}>
        <Spinner />
      </Anwser>
      <Anwser letter="d" isLoading={props.isLoading}>
        <Spinner />
      </Anwser>
    </>
  );

  if (!props.isLoading) {
    anwsersList = anwsers.map((anwser, index) => (
      <Anwser
        key={String.fromCharCode(97 + index)}
        letter={String.fromCharCode(97 + index)}
        checkAnwser={props.checkAnwser}
        isCorrectHighlighted={
          props.correctAnwser === anwser ? props.isCorrectHighlighted : false
        }
        isLoading={props.isLoading}
      >
        {anwser}
      </Anwser>
    ));

    if (props.remainingIncorrectAnwser) {
      anwsersList = anwsers.map((anwser, index) => {
        if (
          anwser !== props.remainingIncorrectAnwser &&
          anwser !== props.correctAnwser
        ) {
          return (
            <Anwser key={String.fromCharCode(97 + index)} isEmpty={true} />
          );
        } else {
          return (
            <Anwser
              key={String.fromCharCode(97 + index)}
              letter={String.fromCharCode(97 + index)}
              checkAnwser={props.checkAnwser}
              isCorrectHighlighted={
                props.correctAnwser === anwser
                  ? props.isCorrectHighlighted
                  : false
              }
              isLoading={props.isLoading}
            >
              {anwser}
            </Anwser>
          );
        }
      });
    }
  }

  console.log(props.correctAnwser);

  return <StyledAnwsers>{anwsersList}</StyledAnwsers>;
}

export default Anwsers;
