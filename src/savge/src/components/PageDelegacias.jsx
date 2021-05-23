import React from "react";
import ListaDelegacias from "./ListaDelegacias";

function PageDelegacias() {
  return (
    <div className='text-center'>
      <h1>Delegacias</h1>
      <ListaDelegacias url={"/delegacias"} />
    </div>
  );
}

export default PageDelegacias;