import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, Grid, Paper, FormControlLabel } from '@material-ui/core';
import clsx from  'clsx';

const styles = makeStyles((theme) => ({
  paper: {
    width: theme.spacing(100),
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    transition: 'all 0.2s ease-out',
    "&:hover": {
      backgroundColor: "#67B1F7", 
      transition: 'all 0.2s ease-out',
    }
  },
  rightAnswer: {
    backgroundColor: '#19FF19',
    color: '#FFFFFF',
    transition: 'all 0.2s ease-out',
  },
}));

const QuizzAnswer = ({ answer, isRightAnswer }) => {
  const classes = styles();

  return (
    <Grid item xs={12}>
      <FormControlLabel 
        value={answer} 
        control={<Radio />} 
        label={
          (
            <Paper className={clsx(classes.paper, isRightAnswer && classes.rightAnswer)}>
              {answer}
            </Paper>
          )
        } 
      />
    </Grid>
  );
}

QuizzAnswer.propTypes = {
  answer: PropTypes.string.isRequired, 
  isRightAnswer: PropTypes.bool
};

QuizzAnswer.defaultProps = {
  isRightAnswer: false
};

export default QuizzAnswer;