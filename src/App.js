import styled, { ThemeProvider } from 'styled-components';

import Game from './components/Game/Game';

import theme from './utils/theme';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <Game />
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
