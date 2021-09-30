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
      <Lifeline
        icon={faPhone}
        isDisabled={props.isPhoneAFriendLifelineUsed}
        onClick={props.usePhoneAFriendLifeline}
      />
      <Lifeline
        icon={faUsers}
        isDisabled={props.isAskTheAudienceLifelineUsed}
        onClick={props.showAskTheAudienceBarGraph}
      />
      <Lifeline
        icon={faSyncAlt}
        isDisabled={props.isChangeQuestionLifelineUsed}
        onClick={props.useChangeQuestionLifeline}
      />
    </Styledlifelines>
  );
}

export default Lifelines;
