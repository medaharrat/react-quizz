import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
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
    span: {
        color: '#037EF3', 
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
    answer: {
        transition: 'all 0.2s ease-out',
        "&:hover": {
            backgroundColor: "#67B1F7", 
            cursor: 'pointer',
            transition: 'all 0.2s ease-out',
        }
    },
}));

const Play = () => {
    const classes = styles();

    const questions = [
        {
            id: 1,
            question: "How old are you?",
            possible_answers: ["🧐 13", "😐 25", "🙄 31", "🤔 50"],
            right_answer: "25"
        },
        /*{
            id: 2,
            question: "Where do you live?",
            possible_answers: ["U.S", "Canada", "France"],
            right_answer: "Canada"
        },
        {
            id: 3,
            question: "What is your highest degree?",
            possible_answers: ["Bachelor", "Masters", "PhD"],
            right_answer: "PhD"
        },*/
    ]
    return (
            <div className={classes.root}>
                <Grid container alignItems="center" spacing={3}>
                    {
                        questions.map( qst => {
                            return (
                                <>
                                    <Grid item xs={12}>
                                        <Typography className={classes.question}>
                                            <span className={classes.span}>Q:</span> { qst.question }
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.answersContainer} xs={12}>
                                    {
                                        qst.possible_answers.map( answer => {
                                            return (
                                                <Paper className={clsx(classes.paper, classes.answer)}>
                                                    <b> {(qst.possible_answers.indexOf(answer) + 1)} </b>
                                                    { '. ' + answer }
                                                </Paper>
                                            )
                                        })
                                    }
                                    </Grid>
                                </>
                            );
                        })
                    }
                    <Grid item xs={12}>
                        <QuizzButton primary text = "Next"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom>
                                Answered questions: 1, 2, 3
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" gutterBottom>
                                Current score: 3/5
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
    )
}

export default Play;