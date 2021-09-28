import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';

import Question from '../Question/Question';
import Anwsers from '../Anwsers/Anwsers';
import Lifelines from '../Lifelines/Lifelines';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

import money from '../../utils/money';
import { gameWonMessage, gameLostMessage } from '../../utils/endgameMessages';

import logo from '../../assets/png/logo.png';
import logoFloat from '../../utils/logoFloatKeyframes';

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  margin-bottom: 0.5rem;

  main {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: -2;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 30rem;
    img {
      width: 100%;
      animation: ${logoFloat} 5s infinite;
    }
  }
`;

function Game() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrectHighlighted, setIsCorrectHighlighted] = useState(false);
  const [isEndgameModalVisible, setIsEndgameModalVisible] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const { width, height } = useWindowSize();

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

  useEffect(
    function checkForEndgame() {
      if (isGameWon && !isGameLost) setIsEndgameModalVisible(true);
      if (isGameLost && !isGameWon) setIsEndgameModalVisible(true);
    },
    [isGameWon, isGameLost]
  );

  async function fetchQuestionsFromAPI() {
    setCurrentQuestionIndex(0);
    const res = await fetch(
      'https://opentdb.com/api.php?amount=3&type=multiple'
    );
    const { results } = await res.json();
    setQuestions(results);
    setIsLoading(false);
  }

  function checkAnwserHandler(anwser) {
    if (anwser === questions[currentQuestionIndex].correct_answer) {
      if (currentQuestionIndex === questions.length - 1) {
        setIsGameWon(true);
        return;
      }
      setIsCorrectHighlighted(true);
    } else {
      setIsGameLost(true);
    }
  }

  function closeEndgameModalHandler() {
    if (isGameWon) setIsGameWon(false);
    if (isGameLost) setIsGameLost(false);
    setIsEndgameModalVisible(false);
    fetchQuestionsFromAPI();
    setIsLoading(true);
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
      <main>
        <img src={logo} alt="who wants to be a millionaire logo" />
      </main>
      <Lifelines />
      <Question money={money[currentQuestionIndex]}>{question}</Question>
      {anwsers}
      {isEndgameModalVisible && (
        <>
          <Backdrop closeEndgameModal={closeEndgameModalHandler} />
          <Modal
            isGameWon={isGameWon}
            closeEndgameModal={closeEndgameModalHandler}
          >
            {isGameWon && gameWonMessage}
            {isGameLost && gameLostMessage}
          </Modal>
        </>
      )}
      {isEndgameModalVisible && isGameWon && (
        <Confetti width={width} height={height} />
      )}
    </StyledGame>
  );
}

export default Game;
