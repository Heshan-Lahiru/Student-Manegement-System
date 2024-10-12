import React from "react";
import { Link } from 'react-router-dom';
const Nav = () => {

    return (

        <div >
    <nav class="navbar bg-dark border-bottom border-body " data-bs-theme="dark">

    <Link to="/studenttable" className="btn text-light py-3 ">
                Go To Table Page
            </Link>
            <Link to="/" className="btn text-light">
                Go To Register Page
            </Link>
    </nav>
          
        </div>

    );

};

export default Nav;