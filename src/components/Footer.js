import React from 'react';
import './footer.css';

const Footer = ({ classes, ...props }) => {
    return (
        <footer class="footer bg-danger">

    <a class="footerText" target="_blank" href="https://github.com/Polansia">Github</a>
    
    ©2020
    
    <a class="footerText" target="_blank" href="https://www.linkedin.com/in/hunter-g-b3b025138/">Linkdin</a>
    
</footer>
    );
};

export default Footer;
