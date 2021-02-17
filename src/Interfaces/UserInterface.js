import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import { 
    FormControl,
    TextField 
} from '@material-ui/core';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';

const UserInterface = () => {
    return (
        <>
            <h1>User's Interface</h1>

            <FormControl>
                <TextField
                    id="outlined-textarea"
                    label="Enter your name"
                    multiline
                    variant="outlined"
                />                
                <QuizzLink to="/game">
                    <QuizzButton text = "Start"/>
                </QuizzLink>
            </FormControl>
        </>   
    )
}

export default UserInterface;