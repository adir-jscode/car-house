import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <h1>How useState works?</h1>
            <p>UseState is a hook. It returns a pair of variable. UseState used to determine the changes of a state variable. it's variable disappears when the function exits. </p>
            <h1>Props vs State</h1>
            <p>Props is an object which stores the value of attributes. On the other hand, State is a hook. it contains data about components and change over time. It represents the information update. Props are immutable.</p>
        </div>
    );
};

export default Footer;