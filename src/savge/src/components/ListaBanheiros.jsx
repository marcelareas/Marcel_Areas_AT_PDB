import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "../context/context";

const ListaBanheiros = ({ url }) => {
  const [banheiros, setBanheiros] = useState([]);

  useEffect(() => {
    busca(url, setBanheiros);
  }, [url]);

  return (
    <div className="row container">
      {banheiros.map((banheiro) => (
        <div class="card text-center padding-top ">
          <div class="card-header">{banheiro.name}</div>
          <div class="card-body">
            <div dangerouslySetInnerHTML={{ __html: banheiro.description.text }} />

            <a href={`https://www.google.com/maps/search/?api=1&query=${banheiro.geoResult.address}`}
              target="_blank"
              class="btn btn-primary">
              Abrir no Maps
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaBanheiros;
