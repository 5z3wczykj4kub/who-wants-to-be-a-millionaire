import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import Bar from '../Bar/Bar';
import generateAskTheAudiencePercentages from '../../utils/generateAskTheAudiencePercentages';

const StyledAskTheAudience = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 18rem;
  height: 20rem;
  padding: 0.5rem;
  padding-top: 3rem;
  background-color: ${(props) => props.theme.secondaryColor};
  border: 2px solid #fff;
  border-radius: 0.5rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;

    header,
    footer {
      display: flex;
      justify-content: space-evenly;
      padding: 0.25rem 0;

      span {
        width: 15%;
      }
    }

    footer {
      align-items: flex-end;
    }

    main {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
      height: 100%;
    }
  }
`;

function AskTheAudience({
  correctAnwserIndex,
  remainingIncorrectAnwserIndex,
  isFiftyFiftyLifelineUsed,
  children,
}) {
  const [percentages, setPercentages] = useState([]);

  const generateBars = useCallback(
    (isFiftyFiftyLifelineUsed = false) => {
      const percentages = generateAskTheAudiencePercentages(
        isFiftyFiftyLifelineUsed
      );
      if (isFiftyFiftyLifelineUsed) {
        const fiftyFiftyPercentages = [0, 0, 0, 0];
        fiftyFiftyPercentages[correctAnwserIndex] = percentages[0];
        fiftyFiftyPercentages[remainingIncorrectAnwserIndex] = percentages[1];
        return fiftyFiftyPercentages;
      }
      const aux = percentages[correctAnwserIndex];
      percentages[correctAnwserIndex] = percentages[0];
      percentages[0] = aux;
      return percentages;
    },
    [correctAnwserIndex, remainingIncorrectAnwserIndex]
  );

  useEffect(() => {
    setPercentages(generateBars(isFiftyFiftyLifelineUsed));
  }, [generateBars, isFiftyFiftyLifelineUsed]);

  return (
    <StyledAskTheAudience>
      {children}
      <section>
        <header>
          {percentages.map((percentage, index) => (
            <span key={index}>{percentage}%</span>
          ))}
        </header>
        <main>
          {percentages.map((percentage, index) => (
            <Bar key={index} height={percentage} />
          ))}
        </main>
        <footer>
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
        </footer>
      </section>
    </StyledAskTheAudience>
  );
}

export default AskTheAudience;
