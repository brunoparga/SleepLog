import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import appTheme from './src/styles/appTheme';
import MainView from './src/styles/MainView';

function App(): React.ReactNode {
  return (
    <ThemeProvider theme={appTheme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
