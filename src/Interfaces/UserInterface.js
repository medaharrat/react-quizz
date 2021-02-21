import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl,
    TextField, 
    Grid
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(20),
      height: '68vh',
    },
}));

const UserInterface = () => {
    const classes = styles();

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
                        />                
                        <QuizzLink to="/game">
                            <QuizzButton primary text = "Start"/>
                        </QuizzLink>
                    </FormControl>  
                </Grid>    
            </Grid>
        </div>
    );
}

export default UserInterface;