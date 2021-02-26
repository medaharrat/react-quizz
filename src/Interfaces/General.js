import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import QuizzButton from '../Components/QuizzButton';
import QuizzLink from '../Components/QuizzLink';
import Box from '@material-ui/core/Box';
import AdminInterface from '../Interfaces/AdminInterface';
import UserInterface from '../Interfaces/UserInterface';
import PlayInterface from '../Interfaces/PlayInterface';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

const styles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#F2F2F2',
      height: '100vh'
    },
}));

const General = ({ username }) => {
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

                <Redirect to="/play" />
                
                <Switch>
                    <Route path="/admin">
                        <AdminInterface />
                    </Route>
                    <Route path="/play">
                        <UserInterface />
                    </Route>
                    <Route path="/game">
                        <PlayInterface />
                        {(username.length === 0) && (
                            <Redirect to="/play" />
                        )}
                    </Route>
                </Switch>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => ({ username: state.user.username }); 
export default connect(mapStateToProps)(General);  