import happyPepeGif from '../assets/gif/happyPepe.gif';
import sadPepeGif from '../assets/gif/sadPepe.gif';

export const gameWonMessage = (
  <>
    <img src={happyPepeGif} alt="happy pepe gif" />
    <p>
      <span>Congratulations!</span>
    </p>
    <p>
      You're officially a <span>millionaire</span>
    </p>
  </>
);
export const gameLostMessage = (correctAnwserIndex, money) => {
  return (
    <>
      <img src={sadPepeGif} alt="sad pepe gif" />
      <p>
        Correct anwser:{' '}
        <span>
          {String.fromCharCode(97 + correctAnwserIndex).toUpperCase()}
        </span>
      </p>
      <p>
        You won <span>${money}</span>
      </p>
    </>
  );
};
