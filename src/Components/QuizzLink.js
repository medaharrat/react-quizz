import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none !important',
    }
}));

const QuizzLink = ({to, children}) => {
    const classes = styles();
    
    return (
        <Link to = {to} className = {classes.link}>
            { children }
        </Link>
    );
}

export default QuizzLink;