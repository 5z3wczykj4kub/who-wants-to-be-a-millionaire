import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Question from '../Question/Question';
import Anwsers from '../Anwsers/Anwsers';
import Lifelines from '../Lifelines/Lifelines';

import money from '../../utils/money';

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  margin-bottom: 0.5rem;
`;

function Game() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectHighlighted, setIsCorrectHighlighted] = useState(false);

  useEffect(() => fetchQuestionsFromAPI(), []);

  useEffect(
    function highlightCorrectAnwser() {
      if (isCorrectHighlighted) {
        const timeoutId = setTimeout(() => {
          setCurrentQuestionIndex((prevState) => prevState + 1);
          setIsCorrectHighlighted(false);
          clearTimeout(timeoutId);
        }, 1000);
      }
    },
    [isCorrectHighlighted]
  );

  async function fetchQuestionsFromAPI() {
    setCurrentQuestionIndex(0);
    const res = await fetch(
      'https://opentdb.com/api.php?amount=15&type=multiple'
    );
    const { results } = await res.json();
    setQuestions(results);
    setIsLoading(false);
  }

  function checkAnwserHandler(anwser) {
    if (anwser === questions[currentQuestionIndex].correct_answer) {
      if (currentQuestionIndex === questions.length - 1) {
        alert('You won! Press OK to restart the game');
        fetchQuestionsFromAPI(); // reset the game
        setIsLoading(true);
        return;
      }
      setIsCorrectHighlighted(true);
    } else {
      alert('You lost! Press OK to restart the game');
      fetchQuestionsFromAPI(); // reset the game
      setIsLoading(true);
    }
  }

  const question = !isLoading
    ? questions[currentQuestionIndex].question
    : 'Loading...';

  const anwsers = !isLoading ? (
    <Anwsers
      isLoading={isLoading}
      isCorrectHighlighted={isCorrectHighlighted}
      correctAnwser={questions[currentQuestionIndex].correct_answer}
      incorrectAnwsers={questions[currentQuestionIndex].incorrect_answers}
      checkAnwser={checkAnwserHandler}
    />
  ) : (
    <Anwsers isLoading={isLoading} />
  );

  return (
    <StyledGame>
      <Lifelines />
      <Question money={money[currentQuestionIndex]}>{question}</Question>
      {anwsers}
    </StyledGame>
  );
}

export default Game;
