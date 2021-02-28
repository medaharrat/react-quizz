import React, { useState } from 'react';
import PropTypes from 'prop-types';  
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography,
    Chip 
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
import QuizzQuestion from '../Components/QuizzQuestion';
import { connect } from 'react-redux';
import clsx from  'clsx';

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },
    question: {
        fontSize: 24,
        margin: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1)
    },
    highlightScore: {
        backgroundColor: '#19FF19',
        color: '#FFFFFF'
    },
    answersContainer: {
        height: '40vh',
    },
    chips: {
        marginLeft: theme.spacing(1)
    },
    chip: {
        marginLeft: 5
    },
    showScore: {
        height: '70vh',
        
    },
    finalResult: {
        transform: 'translateY(180px)',
    }
}));

const Play = ({ questions, username }) => {
    const classes = styles();
    
    const [currentQuestionIndex, setCurrentQuestionIndex]     = useState(0);
    const [selectedAnswer, setSelectedAnswer]                 = useState("");
    const [answeredQuestions, setAnsweredQuestions]           = useState([]);
    const [score, setScore]                                   = useState(0);
    const [showAnswer, setShowAnswer]                         = useState(false);

    const deleteUndefined = (arr) => {
        /* This method removes undefined elements from an array 
        *  I am using it because I encontered a problem when
        *  adding a new question, it is adding many empty
        *  elements 
        * * * * * * * * * * * * * * * * * * * * * * * * * * *  */
       return arr.filter(function( el ) {
        return el !== undefined;
      });
    }

    const questionsNoUndef = deleteUndefined(questions);
    const handleAnswer = () => {
        /* Selected Answer is the right one here */
        if (selectedAnswer.length !== 0){
            /* Set the score */
            if (selectedAnswer === questionsNoUndef[currentQuestionIndex].right_answer)
                setScore(score + 1);
            /* Save the answered questions */
            setAnsweredQuestions([ ...answeredQuestions, questionsNoUndef[currentQuestionIndex]]);
            /* Show the right answer */
            setShowAnswer(true);
            /* Skip to the next questions */
            setTimeout(() => {
                if ((currentQuestionIndex + 1) !== questionsNoUndef.length){
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setShowAnswer(false);
                }
            }, 400);
            /* Reset */
            setSelectedAnswer("");
        }
        else 
            alert('Oops! You have not answered this question.')
    }

    return (
            <div className={classes.root}>
                <Grid container alignItems="center" spacing={3}>
                    <QuizzQuestion 
                        key={questionsNoUndef[currentQuestionIndex].id}
                        question={questionsNoUndef[currentQuestionIndex]} 
                        onAnswerSelect={setSelectedAnswer} 
                        withAnswers 
                        showRightAnswer={showAnswer}
                    />
                    <Grid item xs={12}>
                    {
                        (answeredQuestions.length !== questionsNoUndef.length) && (
                            <QuizzButton onClick={ handleAnswer } primary text = "Next"/>
                        )
                    }
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom>
                                Answered questions
                                <b className={classes.chips}>
                                { 
                                    answeredQuestions.map((question) => {
                                        return (
                                            <Chip
                                                key={question.id} 
                                                size="small" 
                                                className={classes.chip}
                                                color="secondary"
                                                label={answeredQuestions.indexOf(question) + 1} 
                                            />
                                    )})
                                }
                                </b>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={clsx(classes.paper, (answeredQuestions.length === questionsNoUndef.length) && classes.highlightScore)}>
                            <Typography variant="subtitle2" gutterBottom>
                                Current score of { username }: 
                                <b>
                                    { ' ' + score + '/' + answeredQuestions.length } 
                                </b>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
    )
}

Play.propTypes = {  
    questions: PropTypes.array.isRequired,  
    username: PropTypes.string.isRequired,
}; 

Play.defaultProps = {
    questions: [],  
    username: ""
};

const mapStateToProps = (state) => ({ questions: state.questions, username: state.user.username }); 
export default connect(mapStateToProps)(Play);  