import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "../context/context";
import "../assets/css/base.css";

const ListaBanheiros = ({ url }) => {
  var [banheiros, setBanheiros] = useState([]);
  const [termo, setBusca] = useState('');
  banheiros = banheiros.filter((banheiro) => banheiro.name.toLowerCase().includes(termo.toLowerCase()));

  useEffect(() => {
    busca(url, setBanheiros);
  }, [url, termo]);

  return (
    <div>
      <div class="input-group row ">
        <div className="col-sm-4 padding-top container">          
          <input type="search" id="form1" class="form-control" placeholder='Digite o local para buscar'
          value={termo} onChange={(ev) => setBusca(ev.target.value)} />
        </div>
      </div>

      <div className="row container">
        {banheiros.map((banheiro) => (
          <div className="col-sm-4 padding-top">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{banheiro.name}</h5>
                <div
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: banheiro.description.text,
                  }}
                />
                <br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${banheiro.geoResult.address}`}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaBanheiros;
