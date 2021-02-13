import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import appTheme from './src/appTheme';
import MainView from './src/components/MainView';

function App(): React.ReactNode {
  return (
    <ThemeProvider theme={appTheme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
