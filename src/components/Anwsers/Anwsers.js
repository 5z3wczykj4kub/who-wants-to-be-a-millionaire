import { useMemo } from 'react';
import styled from 'styled-components';

import Anwser from '../Anwser/Anwser';

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
      <Anwser letter="a">Loading...</Anwser>
      <Anwser letter="b">Loading...</Anwser>
      <Anwser letter="c">Loading...</Anwser>
      <Anwser letter="d">Loading...</Anwser>
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
      >
        {anwser}
      </Anwser>
    ));
  }

  console.log(props.correctAnwser);

  return <StyledAnwsers>{anwsersList}</StyledAnwsers>;
}

export default Anwsers;
