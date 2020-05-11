import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './App.css';
import UserTable from './components/UserTable';
import NavBar from './components/NavBar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh', 
    background: 'linear-gradient(to right, #ece9e6, #ffffff)'
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar></NavBar>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UserTable></UserTable>
          </Grid>      
        </Grid>
      </Container>
    </div>
  );
}

export default App;
