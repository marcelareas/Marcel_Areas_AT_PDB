import React, { useState, useEffect } from "react";
import { busca } from "../context/context";
import "../assets/css/base.css";

const ListaJogosOlimpicos = ({ url }) => {
  var [list, setList] = useState([]);
  const [termo, setBusca] = useState("");
  list = list.filter((obj) =>
    obj.name.toLowerCase().includes(termo.toLowerCase())
  );

  useEffect(() => {
    busca(url, setList);
  }, [url, termo]);

  return (
    <div>
      <div class="input-group row ">
        <div className="col-sm-4 padding-top container">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Digite o local que deseja buscar"
            value={termo}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </div>
      </div>

      <div className="row container">
        {list.map((obj) => (
          <div className="col-sm-4 padding-top">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{obj.name}</h5>
                <br />

                <div className="card-text">
                  <a href={obj.description.link} target="_blank">
                    Informações Local
                  </a>
                </div>

                <div className="card-text">{`Modalidade: ${
                  obj.taxonomies[0].type == undefined
                    ? "Não Informado"
                    : obj.taxonomies[0].value
                }`}</div>
                <br />

                <br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${obj.name}`}
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

export default ListaJogosOlimpicos;
