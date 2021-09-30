import styled from 'styled-components';

import phonePepe from '../../assets/png/phonePepe.png';

const StyledPhoneAFriend = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 18rem;
  height: 20rem;
  padding: 0.5rem;
  padding-top: 3rem;
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;

  img {
    height: 75%;
  }

  p {
    margin-top: 1rem;
  }
`;

function PhoneAFriend(props) {
  return (
    <StyledPhoneAFriend>
      <img src={phonePepe} alt="pepe with phone" />
      {props.children}
    </StyledPhoneAFriend>
  );
}

export default PhoneAFriend;
