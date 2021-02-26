import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Paper,
    Button,
    RadioGroup 
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

const QuizzQuestion = ({ 
    question, withAnswers, onAnswerSelect, showRightAnswer,
    deleteQuestion
}) => {
    const classes = styles();
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleChange = (e) => {
        setSelectedAnswer(e.target.value);
        onAnswerSelect(e.target.value);
    }

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
                                onClick={() => deleteQuestion(question.id) }
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
                <RadioGroup aria-label="answer" name="answerr" value={selectedAnswer} onChange={handleChange}>   
                {
                    question.possible_answers.map( answer => {
                        console.log(question.right_answer === selectedAnswer);
                        return (
                            
                            <QuizzAnswer 
                                key={answer} 
                                answer={answer} 
                                isRightAnswer={showRightAnswer && question.right_answer === answer}
                            />
                        )
                    })
                }
                </RadioGroup>
                </Grid>
            )
            }
        </Grid>
    );
}

QuizzQuestion.propTypes = {
    question: PropTypes.object.isRequired, 
    withAnswers: PropTypes.bool, 
    onAnswerSelect: PropTypes.func
  };
  
  QuizzQuestion.defaultProps = {
    question: {}, 
    withAnswers: false,
};

export default QuizzQuestion;  