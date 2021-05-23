import React from "react";
import { Link } from 'react-router-dom'
import '../assets/css/base.css'

function CompNavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid flex flex--centro flex--coluna">
        <Link className="navbar-brand" to="/"> 
            <p className='text-navbar'>SAVGE </p>
        </Link>
      </div>
    </nav>
  );
}

export default CompNavBar;
