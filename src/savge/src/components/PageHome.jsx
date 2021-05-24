import React from "react";
import CompCardMenu from "./CompCardMenu";

function PageHome() {
  return (
    <div className='text-center'>
      <div>
        <h1><strong>SAVGE</strong> - Sistema de Apoio ao Visitante em Grandes Eventos</h1>
        <h3>Aplicação para auxilio a visitantes da cidade do Rio de Janeiro no decorrer de grandes eventos</h3>
      </div>      
      <div className="row container">
        <CompCardMenu
          titulo="Banheiros"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/banheiros"
        />
        <CompCardMenu
          titulo="Bombeiros"
          descricao="Busca as informações sobre os quatéis de bonbeiros"
          url="/bombeiros"
        />
        <CompCardMenu
          titulo="Delegacias"
          descricao="Informação sobre as delegacias de polícia na cidade do RJ"
          url="/delegacias"
        />
        <CompCardMenu
          titulo="Hotéis"
          descricao="Busca os hotéis na cidade do RJ"
          url="/hoteis"
        />
        <CompCardMenu
          titulo="Jogos Olímpicos"
          descricao="Busca o local das arenas onde vão acontecer os eventos Olímpicos"
          url="/jogosOlimpicos"
        />
        <CompCardMenu
          titulo="Pontos Turístico"
          descricao="Busca os principais pontos turísticos da cidade do RJ"
          url="/pontosTuristicos"
        />
        <CompCardMenu
          titulo="Postos de Saude"
          descricao="Informações sobre os postos de saúde da cidade do Rio de Janeiro"
          url="/postosSaude"
        />
        <CompCardMenu
          titulo="Praias"
          descricao="Informações sobre as principais praias do Rio de Janeiro"
          url="/praias"
        />
        <CompCardMenu
          titulo="Restaurantes"
          descricao="Informações sobre os restaurates na cidade maravilhosa"
          url="/restaurantes"
        />
      </div>
    </div>
  );
}

export default PageHome;