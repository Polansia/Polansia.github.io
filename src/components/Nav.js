import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = (props) => {
    let history = useHistory();

    const handleClick = (value) => {
        history.push(`/${value}`);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger static-top shadow">
            
                <a className="navbar-brand" href="/">
                    Hunter Gruszczynski
                </a>

                   <li className="navbar-brand" onClick={(e) => history.push('/')}>
                        <div className="nav-link">Home</div>
                   </li>
                   <li className="navbar-brand" onClick={(e) => history.push('/portfolio')}>
                        <div className="nav-link">Portfolio</div>
                   </li>
        </nav>
    );
};

export default Nav;
