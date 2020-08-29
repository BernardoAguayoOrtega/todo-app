//import react
import React from 'react';
//import material 
import Typography from '@material-ui/core/Typography';
//import styles
import GlobalStyle from '../../styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
    </>
  );
};
