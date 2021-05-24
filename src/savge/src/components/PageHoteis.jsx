import React from "react";
import ListaHoteis from "./ListaHoteis";

function PageHoteis() {
  return (
    <div className='text-center'>
      <h1>Hoteis</h1>
      <ListaHoteis url={"/hoteis"} />
    </div>
  );
}

export default PageHoteis;
