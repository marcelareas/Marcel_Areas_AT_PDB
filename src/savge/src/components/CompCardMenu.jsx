import { Link } from "react-router-dom";
import "../assets/css/base.css";

function CompCardMenu({ titulo, descricao, url }) {
  return (
    <div className="col-sm-3 padding-top">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <br />
          <Link to={url} className="btn btn-primary">
            Ir para Busca
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompCardMenu;
