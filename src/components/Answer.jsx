import React from 'react';
import { makeStyles, createStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      borderColor: '#003399',
      color: '#003399',
      fontWeight: 700,
      marginBottom: '8px',
      "&:hover": {
        backgroundColor: '#003399',
        color: '#FFFFFF'
      }
    }
  })
));

const Answer = (props) => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.button} onClick={() => {props.select(props.content, props.nextId)}}>
      {props.content}
    </Button>
  )
}

export default Answer