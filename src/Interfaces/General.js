import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';
import Box from '@material-ui/core/Box';
import AdminInterface from '../Interfaces/AdminInterface';
import UserInterface from '../Interfaces/UserInterface';
import PlayInterface from '../Interfaces/PlayInterface';
import Container from '@material-ui/core/Container';

const styles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#F2F2F2',
      height: '100vh'
    },
}));

const General = () => {
    const classes = styles();

    return (
        <Container>
            <Box component="div" className={classes.container}>
                <QuizzLink
                    to="/admin"
                >
                    <QuizzButton primary text = "Admin"/>
                </QuizzLink>
                <QuizzLink
                    to="/play"
                >
                    <QuizzButton primary text = "User"/>
                </QuizzLink>
                
                <Switch>
                    <Route path="/admin">
                        <AdminInterface />
                    </Route>
                    <Route path="/play">
                        <UserInterface />
                    </Route>
                    <Route path="/game">
                        <PlayInterface />
                    </Route>
                </Switch>
            </Box>
        </Container>
    );
}

export default General;
