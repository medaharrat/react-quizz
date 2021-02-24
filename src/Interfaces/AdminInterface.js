import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';  
import {
    Grid,
    Typography,
    FormControl,
    TextField,
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
import QuizzQuestion from '../Components/QuizzQuestion';
import { connect } from 'react-redux';
import { addQuestion, deleteQuestion } from '../Actions';                      

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    title: {
        marginTop: theme.spacing(1),
        textAlign: 'left',
    },
    span: {
        color: '#037EF3', 
    },
    paper: {
        fontSize: 18,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    input: {
        margin: theme.spacing(1)
    },
}));

const AdminInterface = ({ questions, addQuestion, deleteQuestion }) => {
    const classes = styles();

    const questionId                            = (questions.length)++;
    const [question, setQuestion]               = useState("");
    const [possibleAnswer1, setPossibleAnswer1] = useState("");
    const [possibleAnswer2, setPossibleAnswer2] = useState("");
    const [possibleAnswer3, setPossibleAnswer3] = useState("");
    const [rightAnswer, setRightAnswer]         = useState("");

    const handleSubmit = (e) => {
        //deleteQuestion(1)
        e.preventDefault();
        /* Create a new object */
        const newQuestion = {
            id: questionId,
            question: question,
            possible_answers: [rightAnswer, possibleAnswer1, possibleAnswer2, possibleAnswer3],
            right_answer: rightAnswer
        }
        /* Dispatch */
        addQuestion(newQuestion);
        /* Clear fields */
        setQuestion("");
        setPossibleAnswer1("");
        setPossibleAnswer2("");
        setPossibleAnswer3("");
        setRightAnswer("");
    };

    const handleDelete = (questionId) => {
        console.log("DEL " + questionId);
        //deleteQuestion(1);
    }

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
    return (
        <div className={classes.root}>
            <Grid 
                container 
                justify="center" 
                alignItems="center" 
                spacing={3}
            >
                <Grid item xs={8}>
                <fieldset>
                    <legend>
                        <Typography variant="subtitle1" className={classes.title} gutterBottom>
                            Available questions :
                        </Typography>
                    </legend>
                    <Grid 
                        container 
                        justify="center" 
                        alignItems="center" 
                        spacing={1}
                    >
                    {
                        deleteUndefined(questions).map( question => {
                            return (
                                <QuizzQuestion 
                                    key={question.id} 
                                    question={question}
                                    setToDelete={handleDelete}
                                />
                            );
                        })
                    }
                    </Grid>
                </fieldset>
                </Grid>
   
                <Grid item xs={8}>
                <fieldset>
                    <legend>
                        <Typography variant="subtitle1" className={classes.title} gutterBottom>
                            Add more questions :
                        </Typography>
                    </legend>
                    <div>
                        <FormControl>
                            <TextField
                                id="outlined-textarea"
                                label="Enter the question"
                                multiline
                                name="question"
                                variant="outlined"
                                className={classes.input}
                                value={question} 
                                onChange={(e) => setQuestion(e.target.value)} 
                            />                
                            <TextField
                                id="outlined-textarea"
                                label="Enter the right answer"
                                multiline
                                name="right_answer"
                                variant="outlined"
                                className={classes.input}
                                value={rightAnswer} 
                                onChange={(e) => setRightAnswer(e.target.value)} 
                            />    
                            <TextField
                                id="outlined-textarea"
                                label="Enter the second possible answer"
                                multiline
                                name="possible_answer1"
                                variant="outlined"
                                className={classes.input}
                                value={possibleAnswer1} 
                                onChange={(e) => setPossibleAnswer1(e.target.value)}
                            />   
                            <TextField
                                id="outlined-textarea"
                                label="Enter the third possible answer"
                                multiline
                                name="possible_answer2"
                                variant="outlined"
                                className={classes.input}
                                value={possibleAnswer2} 
                                onChange={(e) => setPossibleAnswer2(e.target.value)}
                            /> 
                            <TextField
                                id="outlined-textarea"
                                label="Enter the fourth possible answer"
                                multiline
                                name="possible_answer3"
                                variant="outlined"
                                className={classes.input}
                                value={possibleAnswer3} 
                                onChange={(e) => setPossibleAnswer3(e.target.value)}
                            />  
                            <QuizzButton onClick = {handleSubmit} text = "Add"/>
                        </FormControl> 
                    </div> 
                </fieldset>
                </Grid>
            </Grid>
        </div>
    )
}

AdminInterface.propTypes = {  
    questions: PropTypes.array.isRequired,  
    addQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired
};  

const mapStateToProps = (state) => ({ questions: state.questions }); 
export default connect(mapStateToProps, { addQuestion, deleteQuestion })(AdminInterface);  