import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(to right, #614385, #516395)',
    margin: '0 0 25px 0'
  }
});

export default function NavBar() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">
          Employee Directory
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
