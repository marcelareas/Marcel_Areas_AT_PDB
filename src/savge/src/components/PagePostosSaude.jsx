import React from "react";
import ListaPostosSaude from "./ListaPostosSaude";

function PagePostosSaude() {
  return (
    <div className='text-center'>
      <h1>Postos de Saúde</h1>
      <ListaPostosSaude url={"/postos-saude"} />
    </div>
  );
}

export default PagePostosSaude;
