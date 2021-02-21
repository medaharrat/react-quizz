import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography,
    FormControl,
    TextField,
    Button
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
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

const AdminInterface = ({ questions }) => {
    const classes = styles();

    const question_id                            = (questions.length)++;
    const [question, setQuestion]                = useState("");
    const [possible_answer1, setPossibleAnswer1] = useState("");
    const [possible_answer2, setPossibleAnswer2] = useState("");
    const [possible_answer3, setPossibleAnswer3] = useState("");
    const [right_answer, setRightAnswer]         = useState("");
    
    const handleSubmit = (e) => {
        const newQ = {
            id: question_id,
            question: question,
            possible_answers: [right_answer, possible_answer1, possible_answer2, possible_answer3],
            right_answer: right_answer
        }
        console.log(questions);
        addQuestion(newQ);                                
    };

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
                        questions.map( qst => {
                            return (
                                <Grid item xs={8} key={qst.id}>
                                    <Paper className={classes.paper}>
                                        <span className={classes.span}>Q{questions.indexOf(qst) + 1}: </span> 
                                        { qst.question }
                                        <Button 
                                        className={classes.deleteBtn} 
                                        onClick = {() => deleteQuestion(qst.id)}
                                        color="secondary">
                                            Delete
                                        </Button>
                                    </Paper>
                                </Grid>
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
                                value={right_answer} 
                                onChange={(e) => setRightAnswer(e.target.value)} 
                            />    
                            <TextField
                                id="outlined-textarea"
                                label="Enter the second possible answer"
                                multiline
                                name="possible_answer1"
                                variant="outlined"
                                className={classes.input}
                                value={possible_answer1} 
                                onChange={(e) => setPossibleAnswer1(e.target.value)}
                            />   
                            <TextField
                                id="outlined-textarea"
                                label="Enter the third possible answer"
                                multiline
                                name="possible_answer2"
                                variant="outlined"
                                className={classes.input}
                                value={possible_answer2} 
                                onChange={(e) => setPossibleAnswer2(e.target.value)}
                            /> 
                            <TextField
                                id="outlined-textarea"
                                label="Enter the fourth possible answer"
                                multiline
                                name="possible_answer3"
                                variant="outlined"
                                className={classes.input}
                                value={possible_answer3} 
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

const mapStateToProps = (state) => ({ questions: state.questions }); 
const mapDispatchToProps = { addQuestion, deleteQuestion };  

export default connect(mapStateToProps, mapDispatchToProps)(AdminInterface);  
