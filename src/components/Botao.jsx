import React from "react";
import "./Botao.css";

const Botao = (props) => {
  return (
    <>
      <button onClick={props.onBuscar}> Buscar </button>
    </>
  );
};

export default Botao;
