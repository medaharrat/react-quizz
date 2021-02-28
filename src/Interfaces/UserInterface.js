import React, { useState } from 'react';
import PropTypes from 'prop-types';  
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl,
    TextField, 
    Grid,
    Typography
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';
import { connect } from 'react-redux';
import { setUsername } from '../Actions/index';

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(10),
      height: '68vh',
    },
    input: {
        width: theme.spacing(70)
    },
    notice: {
        height: '25vh',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        textAlign: 'justify',
        padding: theme.spacing(3),
        color: '#404040',
    }
}));

const UserInterface = ({ questions, setUsername }) => {
    const classes = styles();

    const [name, setName] = useState("");

    const handleSubmit = () => {
        if (name.length !== 0)
            setUsername(name);
    }

    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={6}>
                    <div className={classes.notice}>
                        <Typography gutterBottom>
                            Dear Player, the application is a form of a quizz game where you get to answer
                            a few questions and get your score. The questions can be added from the Admin interface
                            which can be accessed by clicking the Admin button above. You have to enter your name first 
                            before you can start the game. <br/>Good luck :D
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <TextField
                            id="outlined-textarea"
                            label="Enter your name to continue"
                            multiline
                            variant="outlined"
                            className={classes.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        {(name.length !== 0) && (questions.length !== 0) && (
                            <QuizzLink to="/game">
                                <QuizzButton 
                                    primary 
                                    text="Start"
                                    onClick={handleSubmit}
                                />
                            </QuizzLink>
                        )}
                    </FormControl>  
                </Grid>    
            </Grid>
        </div>
    );
}

UserInterface.propTypes = {  
    questions: PropTypes.array.isRequired,  
    setUsername: PropTypes.func.isRequired
}; 

const mapStateToProps = (state) => ({ questions: state.questions }); 
export default connect(mapStateToProps, { setUsername })(UserInterface);  