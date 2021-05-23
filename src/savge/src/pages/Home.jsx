import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/base/base.css';

function Home() {
  return (
    <div className="row container">
      <div className="col-sm-3 padding-top">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Banheiros</h5>
            <p className="card-text">Busca sobre os banheiros disponiveis na cidade</p>
            <br />
            <Link to="/banheiros" className="btn btn-primary">
              Ir para Busca
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
