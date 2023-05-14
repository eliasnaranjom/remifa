// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css';

function Button(props) {
    const { children, onClick } = props;

    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;