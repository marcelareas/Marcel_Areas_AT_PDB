import React from "react";
import ListaBanheiros from "./ListaBanheiros";

function PageBanheiros() {
  return (
    <div className='text-center'>
      <h1>Banheiros</h1>
      <ListaBanheiros url={"/banheiros"} />
    </div>
  );
}

export default PageBanheiros;
