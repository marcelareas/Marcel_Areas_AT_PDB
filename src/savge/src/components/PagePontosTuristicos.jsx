import React from "react";
import ListaPontosTuristicos from "./ListaPontosTuristicos";

function PageJogosOlimpicos() {
  return (
    <div className='text-center'>
      <h1>Pontos Turísticos</h1>
      <ListaPontosTuristicos url={"/pontos-turisticos"} />
    </div>
  );
}

export default PageJogosOlimpicos;
