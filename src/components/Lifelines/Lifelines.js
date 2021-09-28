import styled from 'styled-components';
import { faPhone, faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

import Lifeline from '../Lifeline/Lifeline';

const Styledlifelines = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 22rem;
  margin-top: 0.75rem;
`;

function Lifelines(props) {
  return (
    <Styledlifelines>
      <Lifeline
        isDisabled={props.isFiftyFiftyLifelineDisabled}
        onClick={props.useFiftyFiftyLifeline}
      />
      <Lifeline icon={faPhone} />
      <Lifeline icon={faUsers} />
      <Lifeline
        icon={faSyncAlt}
        isDisabled={props.isChangeQuestionLifelineUsed}
        onClick={props.useChangeQuestion}
      />
    </Styledlifelines>
  );
}

export default Lifelines;
