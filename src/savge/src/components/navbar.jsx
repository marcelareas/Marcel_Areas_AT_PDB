import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid flex flex--centro flex--coluna">
        <Link className="navbar-brand" to="/"> 
            <p className='text-navbar'>Sistema de Apoio ao Visitante em Grandes Eventos </p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
