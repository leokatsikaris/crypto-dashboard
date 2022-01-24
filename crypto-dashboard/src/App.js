import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Raleway", sans-serif'
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Route exact path="/" component={Dashboard} />
    </div>
    </ThemeProvider>
  );
}

export default App;
