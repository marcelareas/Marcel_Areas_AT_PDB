import React from "react";
import ListaBombeiros from "./ListaBombeiros";

function PageBombeiros() {
  return (
    <div className='text-center'>
      <h1>Bombeiros</h1>
      <ListaBombeiros url={"/bombeiros"} />
    </div>
  );
}

export default PageBombeiros;