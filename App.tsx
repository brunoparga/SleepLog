import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import appTheme from './src/appTheme';
import MainView from './src/MainView';

function App(): React.ReactNode {
  return (
    <ThemeProvider theme={appTheme}>
      <MainView />
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-unused-modules
export default App;
