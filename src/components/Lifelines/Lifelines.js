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

function Lifelines() {
  return (
    <Styledlifelines>
      <Lifeline />
      <Lifeline icon={faPhone} />
      <Lifeline icon={faUsers} />
      <Lifeline icon={faSyncAlt} />
    </Styledlifelines>
  );
}

export default Lifelines;
