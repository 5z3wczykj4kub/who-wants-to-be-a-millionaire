import happyPepeGif from '../assets/gif/happyPepe.gif';
import sadPepeGif from '../assets/gif/sadPepe.gif';

export const gameWonMessage = (
  <>
    <img src={happyPepeGif} alt="happy pepe gif" />
    <p>
      <span>Congratulations!</span>{' '}
    </p>
    <p>You're officially a millionaire.</p>
  </>
);
export const gameLostMessage = (
  <>
    <img src={sadPepeGif} alt="sad pepe gif" />
    <p>I'm sorry. You lost.</p>
    <p>Maybe next time you'll be more lucky.</p>
  </>
);
