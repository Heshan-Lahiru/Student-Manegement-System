import React from "react";
import { Link } from 'react-router-dom';
const Nav = () => {

    return (

        <div>

            <Link to="/studenttable" className="btn btn-light">
                Go To Table Page
            </Link>
        </div>

    );

};

export default Nav;