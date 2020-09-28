import React from 'react';
import { useHistory } from 'react-router-dom';


function Nav(props) {
   return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger static-top shadow">
            
                <a className="navbar-brand" href="/">
                    Hunter Gruszczynski
                </a>

                    <li class="navbar-brand">
                       <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                   </li>
                     <li class="navbar-brand">
                         <a class="nav-link" href="Portfolio">Link</a>
                     </li>
        </nav>
    );
};

export default Nav;
