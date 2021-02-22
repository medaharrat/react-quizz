import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl,
    TextField, 
    Grid
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';
import { connect } from 'react-redux';

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(20),
      height: '68vh',
    },
    alert: {
        marginTop: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(20),
    }
}));

const UserInterface = ({ questions }) => {
    const classes = styles();

    const [name, setName] = useState("");
    const [alert, setAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || questions.length === 0){
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000)
        }
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" spacing={3}>
                <Grid item xs={12}>
                    <FormControl>
                        <TextField
                            id="outlined-textarea"
                            label="Enter your name"
                            multiline
                            variant="outlined"
                            className={classes.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        <QuizzLink to="/game">
                            <QuizzButton primary onClick={ handleSubmit } text = "Start"/>
                        </QuizzLink>
                    </FormControl>  
                </Grid>    
                {
                    alert && (
                        <Alert className={classes.alert} variant="filled" severity="info">
                            {
                                questions.length === 0 &&
                                ( <b>Sorry! no questions to answer</b> )   
                            }
                            {
                                name.length === 0 &&
                                ( <b>Please enter your name to continue!</b> )
                            }
                        </Alert>
                    )
                }
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({ questions: state.questions }); 

export default connect(mapStateToProps)(UserInterface);  
