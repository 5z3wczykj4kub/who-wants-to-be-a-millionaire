import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';

import Question from '../Question/Question';
import Anwsers from '../Anwsers/Anwsers';
import Lifelines from '../Lifelines/Lifelines';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import Logo from '../Logo/Logo';
import Spinner from '../Spinner/Spinner';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import MoneyLadder from '../MoneyLadder/MoneyLadder';
import AskTheAudience from '../AskTheAudience/AskTheAudience';
import CloseIcon from '../CloseIcon/CloseIcon';
import Button from '../Button/Button';

import money from '../../utils/money';
import { gameWonMessage, gameLostMessage } from '../../utils/endgameMessages';

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
  const [isEndgameModalVisible, setIsEndgameModalVisible] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const { width, height } = useWindowSize();
  const [isSidedrawerVisible, setIsSidedrawerVisible] = useState(false);
  const [isFiftyFiftyLifelineUsed, setIsFiftyFiftyLifelineUsed] =
    useState(false);
  const [isFiftyFiftyLifelineDisabled, setIsFiftyFiftyLifelineDisabled] =
    useState(false);
  const [isChangeQuestionLifelineUsed, setIsChangeQuestionLifelineUsed] =
    useState(false);
  const [isAskTheAudienceLifelineUsed, setIsAskTheAudienceLifelineUsed] =
    useState(false);
  const [isAskTheAudienceBarGraphVisible, setIsAskTheAudienceBarGraphVisible] =
    useState(false);

  useEffect(
    function outputCorrectAnwsersInDevToolsConsole() {
      if (questions.length > 0)
        console.log(questions[currentQuestionIndex].correct_answer);
    },
    [currentQuestionIndex, questions]
  );

  useEffect(() => fetchQuestionsFromAPI(), []);

  useEffect(
    function highlightCorrectAnwser() {
      if (isCorrectHighlighted) {
        const timeoutId = setTimeout(() => {
          setCurrentQuestionIndex((prevState) => prevState + 1);
          setIsCorrectHighlighted(false);
          setIsFiftyFiftyLifelineUsed(false);
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
      'https://opentdb.com/api.php?amount=16&type=multiple'
    );
    const { results } = await res.json();
    setQuestions(results);
    setIsLoading(false);
  }

  function checkAnwserHandler(anwser) {
    if (anwser === questions[currentQuestionIndex].correct_answer) {
      if (currentQuestionIndex === questions.length - 2) {
        setIsGameWon(true);
        return;
      }
      setIsCorrectHighlighted(true);
    } else {
      setIsGameLost(true);
    }
  }

  function closeEndgameModalHandler() {
    resetTheGame();
  }

  function toggleSidedrawerHandler() {
    setIsSidedrawerVisible((prevState) => !prevState);
  }

  function useFiftyFiftyLifelineHandler() {
    if (isFiftyFiftyLifelineDisabled) return;
    setIsFiftyFiftyLifelineUsed(true);
    setIsFiftyFiftyLifelineDisabled(true);
  }

  function useChangeQuestionLifelineHandler() {
    if (!isChangeQuestionLifelineUsed) {
      setQuestions((prevQuestions) => {
        const newQuestions = [...prevQuestions];
        newQuestions[currentQuestionIndex] =
          prevQuestions[prevQuestions.length - 1];
        return newQuestions;
      });
      setIsChangeQuestionLifelineUsed(true);
      if (isFiftyFiftyLifelineDisabled) setIsFiftyFiftyLifelineUsed(false);
    }
  }

  function showAskTheAudienceBarGraphHandler() {
    if (isAskTheAudienceLifelineUsed) return;
    setIsAskTheAudienceBarGraphVisible(true);
    setIsAskTheAudienceLifelineUsed(true);
  }

  function hideAskTheAudienceBarGraphHandler() {
    setIsAskTheAudienceBarGraphVisible(false);
  }

  function resetTheGame() {
    if (isGameWon) setIsGameWon(false);
    if (isGameLost) setIsGameLost(false);
    setIsEndgameModalVisible(false);
    setIsFiftyFiftyLifelineUsed(false);
    setIsFiftyFiftyLifelineDisabled(false);
    setIsChangeQuestionLifelineUsed(false);
    setIsAskTheAudienceLifelineUsed(false);
    fetchQuestionsFromAPI();
    setIsLoading(true);
  }

  const question = !isLoading ? (
    questions[currentQuestionIndex].question
  ) : (
    <Spinner />
  );

  const anwsers = !isLoading ? (
    <Anwsers
      isLoading={isLoading}
      isCorrectHighlighted={isCorrectHighlighted}
      correctAnwser={questions[currentQuestionIndex].correct_answer}
      incorrectAnwsers={questions[currentQuestionIndex].incorrect_answers}
      remainingIncorrectAnwser={
        isFiftyFiftyLifelineUsed
          ? questions[currentQuestionIndex].incorrect_answers[0]
          : null
      }
      checkAnwser={checkAnwserHandler}
    />
  ) : (
    <Anwsers isLoading={isLoading} />
  );

  return (
    <StyledGame>
      <Logo />
      <Lifelines
        isFiftyFiftyLifelineDisabled={isFiftyFiftyLifelineDisabled}
        isChangeQuestionLifelineUsed={isChangeQuestionLifelineUsed}
        isAskTheAudienceLifelineUsed={isAskTheAudienceLifelineUsed}
        useFiftyFiftyLifeline={useFiftyFiftyLifelineHandler}
        useChangeQuestionLifeline={useChangeQuestionLifelineHandler}
        showAskTheAudienceBarGraph={showAskTheAudienceBarGraphHandler}
      />
      <Question
        isLoading={isLoading}
        money={money[currentQuestionIndex]}
        toggleSidedrawer={toggleSidedrawerHandler}
      >
        {question}
      </Question>
      {anwsers}
      {isAskTheAudienceBarGraphVisible && (
        <>
          <Backdrop onClick={hideAskTheAudienceBarGraphHandler} />
          <AskTheAudience>
            <CloseIcon
              color="#fff"
              onClick={hideAskTheAudienceBarGraphHandler}
            />
          </AskTheAudience>
        </>
      )}
      {isEndgameModalVisible && (
        <>
          <Backdrop onClick={closeEndgameModalHandler} />
          <Modal isGameWon={isGameWon}>
            <CloseIcon onClick={closeEndgameModalHandler} />
            {isGameWon && gameWonMessage}
            {isGameLost && gameLostMessage}
            <Button onClick={closeEndgameModalHandler}>Play again</Button>
          </Modal>
        </>
      )}
      {isEndgameModalVisible && isGameWon && (
        <Confetti width={width} height={height} />
      )}
      <Sidedrawer isSidedrawerVisible={isSidedrawerVisible}>
        <MoneyLadder
          money={money[currentQuestionIndex]}
          toggleSidedrawer={toggleSidedrawerHandler}
        />
      </Sidedrawer>
    </StyledGame>
  );
}

export default Game;
