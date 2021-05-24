import React from "react";
import ListaPraias from "./ListaPraias";

function PagePraias() {
  return (
    <div className='text-center'>
      <h1>Postos de Saúde</h1>
      <ListaPraias url={"/praias"} />
    </div>
  );
}

export default PagePraias;
