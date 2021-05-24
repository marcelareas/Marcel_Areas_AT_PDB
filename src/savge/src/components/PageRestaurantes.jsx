import React from "react";
import ListaRestaurantes from "./ListaRestaurantes";

function PageRestaurantes() {
  return (
    <div className='text-center'>
      <h1>Restaurantes</h1>
      <ListaRestaurantes url={"/restaurantes"} />
    </div>
  );
}

export default PageRestaurantes;
