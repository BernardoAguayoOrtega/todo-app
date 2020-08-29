//import react
import React from 'react';
//import material 
import Typography from '@material-ui/core/Typography';
//import styles
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);