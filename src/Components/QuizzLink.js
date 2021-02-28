import React from 'react';
import PropTypes from 'prop-types';
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
        <Link to={to} className={classes.link}>
            { children }
        </Link>
    );
}

QuizzLink.propTypes = {
    to: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired 
};

export default QuizzLink;