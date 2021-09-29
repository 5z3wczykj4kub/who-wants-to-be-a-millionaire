import styled from 'styled-components';

const StyledAskTheAudience = styled.div`
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
      height: 100%;

      div {
        width: 15%;
        height: 100%;
        background: linear-gradient(
          to right,
          #eaeaea,
          #dbdbdb,
          #f2f2f2,
          #ada996
        );
        border-radius: 0.25rem 0.25rem 0 0;
      }
    }
  }
`;

function AskTheAudience(props) {
  return (
    <StyledAskTheAudience>
      {props.children}
      <section>
        <header>
          <span>60%</span>
          <span>60%</span>
          <span>60%</span>
          <span>60%</span>
        </header>
        <main>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
