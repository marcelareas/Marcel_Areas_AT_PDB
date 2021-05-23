import React from "react";
import imagem from '../assets/img/image_error.jpg';
import '../assets/css/errorPage.css'
import '../assets/css/base/base.css';

function ErrorPage() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="error-imagem" src={imagem} alt="ilustração página de erro" />
      <p className="naoencontrado-texto">Ops, Essa página não existe!</p>
    </main>
  );
}

export default ErrorPage;
