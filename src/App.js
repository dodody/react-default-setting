import React from 'react';
import {ThemeProvider} from 'styled-components'
import {light} from 'theme'
import {AppContainer} from './containers';



function App() {
  return (
    <ThemeProvider theme={light}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;