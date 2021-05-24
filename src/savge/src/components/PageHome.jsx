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
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/bombeiros"
        />
        <CompCardMenu
          titulo="Delegacias"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/delegacias"
        />
        <CompCardMenu
          titulo="Hotéis"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/hoteis"
        />
        <CompCardMenu
          titulo="Jogos Olímpicos"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/jogosOlimpicos"
        />
        <CompCardMenu
          titulo="Pontos Turístico"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/pontosTuristicos"
        />
        <CompCardMenu
          titulo="Postos de Saude"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/postosSaude"
        />
        <CompCardMenu
          titulo="Praias"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/praias"
        />
        <CompCardMenu
          titulo="Restaurantes"
          descricao="Busca os locais com banheiros disponiveis na cidade do RJ"
          url="/restaurantes"
        />
      </div>
    </div>
  );
}

export default PageHome;