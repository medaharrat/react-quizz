import React, { useState } from 'react';
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
import { setAnswer } from '../Actions/index';

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

const Play = ({ questions, setAnswer }) => {
    const classes = styles();
    const [currentQuestionIndex, setCurrentQuestionIndex]     = useState(0);
    const [selectedAnswer, setSelectedAnswer]                 = useState("");
    const [answeredQuestions, setAnsweredQuestions]           = useState([]);
    const [score, setScore]                                   = useState(0)

    const handleAnswer = () => {
        if (selectedAnswer.length === 0){
            alert('You have not answered to this question, are you sure you want to proceed?')
        }
        else {
            /* Save Answer */
            if (selectedAnswer === questions[currentQuestionIndex].right_answer){
                setScore(score + 1);
            }
            /* Save the answered questions and the score */
            setAnsweredQuestions([ ...answeredQuestions, questions[currentQuestionIndex]]);
            /* Skip to the next questions */
            if ((currentQuestionIndex + 1) != questions.length)
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            /* Reset */
            setSelectedAnswer("");
        }
    }

    return (
            <div className={classes.root}>
                <Grid container alignItems="center" spacing={3}>
                    {
                        (answeredQuestions.length !== questions.length) 
                        ?
                        [questions[currentQuestionIndex]].map( question => {
                            return (
                                <QuizzQuestion 
                                    question={question} 
                                    onAnswerSelect={setSelectedAnswer} 
                                    withAnswers 
                                />
                            )
                        })
                        :
                        (
                            <Grid item xs={12} className={classes.showScore}>
                                <Typography variant="h4" className={classes.finalResult}>
                                    You're done! your score is {score + '/' + answeredQuestions.length} 
                                </Typography>
                                <Typography variant="h3" className={classes.finalResult}> 
                                {
                                    (score > (questions.length/2)) ? '🎉' : '😥'
                                }
                                </Typography>
                            </Grid>
                        )
                    }
                    <Grid item xs={12}>
                    {
                        (answeredQuestions.length != questions.length) && (
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
                                    answeredQuestions.map((qst) => {
                                        return (
                                            <Chip 
                                                size="small" 
                                                className={classes.chip}
                                                color="secondary"
                                                label={answeredQuestions.indexOf(qst) + 1} 
                                            />
                                        )
                                    })
                                }
                                </b>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom>
                                Current score: 
                                <b> { score + '/' + answeredQuestions.length } </b>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
    )
}

const mapStateToProps = (state) => ({ questions: state.questions }); 
export default connect(mapStateToProps, { setAnswer })(Play);  