import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Paper,
    Button
} from '@material-ui/core';
import QuizzAnswer from './QuizzAnswer';

const styles = makeStyles((theme) => ({
    question: {
        fontSize: 24,
        margin: theme.spacing(5),
    },
    span: {
        color: '#037EF3', 
    },
    answersContainer: {
        height: '40vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1)
    },
    deleteBtn: {
        transform: 'translateY(-7px)',
        float: 'right'
    }
}));

const QuizzQuestion = ({ question, onAnswerSelect, withAnswers, setToDelete }) => {
    const classes = styles();

    return (
        <Grid item xs={12} key={question.id}>
            <Grid item xs={12}>
                {
                    (withAnswers !== true) ? (
                        <Paper className={classes.paper}>
                            <b>
                                <span className={classes.span}>Q{question.id}: </span> 
                                { question.question }
                            </b>
                            <Button 
                                className={classes.deleteBtn} 
                                variant="outlined" 
                                color="secondary"
                                onClick={setToDelete(question.id)}
                            >
                                Delete
                            </Button>
                        </Paper>
                    )
                    :
                    (
                    <Typography className={classes.question}>
                        <span className={classes.span}>Q: </span> 
                        { question.question }
                    </Typography>
                    )
                }
            </Grid>
            { 
            withAnswers && (
                <Grid item className={classes.answersContainer} xs={12}>
                {
                    question.possible_answers.map( answer => {
                        return (
                            <QuizzAnswer 
                                key={answer} 
                                answer={answer} 
                                onAnswerSelect={onAnswerSelect} 
                            />
                        )
                    })
                }
                </Grid>
            )
            }
        </Grid>
    );
}

QuizzQuestion.propTypes = {
    question: PropTypes.object.isRequired, 
    onAnswerSelect: PropTypes.func.isRequired, 
    withAnswers: PropTypes.bool, 
    setToDelete: PropTypes.func.isRequired
  };
  
  QuizzQuestion.defaultProps = {
    question: {}, 
    onAnswerSelect: null,
    withAnswers: false,
    setToDelete: null
};

export default QuizzQuestion;