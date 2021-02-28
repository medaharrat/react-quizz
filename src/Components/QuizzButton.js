import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
    primary: {
        color: '#ffffff',
        padding: 10,
        margin: 10,
        height: '50px',
        width: '500px',  
        backgroundColor: '#037Ef3',
        "&:hover": {
            backgroundColor: "#0264C2 "
        }
    },
    secondary: {
        color: '#ffffff',
        padding: 10,
        margin: 10,
        height: '50px',
        width: '500px',  
        backgroundColor: '#DE9C2B',
        "&:hover": {
            backgroundColor: "#C78C26 "
        }
    },
}));

const QuizzButton = ({ primary, text, onClick }) => {
    const classes = styles();

    return (
        <Button 
            variant="contained" 
            onClick={onClick} 
            className={ primary ? classes.primary : classes.secondary }
        >
            { text }
        </Button>
    )
}

QuizzButton.propTypes = {
    primary: PropTypes.bool, 
    text: PropTypes.string.isRequired, 
    onClick: PropTypes.func
};
  
QuizzButton.defaultProps = {
    primary: false, 
    onClick: null, 
};

export default QuizzButton;