import React from "react";
import ListaJogosOlimpicos from "./ListaJogosOlimpicos";

function PageJogosOlimpicos() {
  return (
    <div className='text-center'>
      <h1>Jogos Olímpicos</h1>
      <ListaJogosOlimpicos url={"/jogos-olimpicos"} />
    </div>
  );
}

export default PageJogosOlimpicos;
