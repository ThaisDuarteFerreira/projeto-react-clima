import React from "react";
import "./Input.css";

const Input = (props) => {
  function apertouTecla(event) {
    if (event.key === "Enter") {
      props.onBuscar();
    }
  }

  return (
    <>
      <label htmlFor="cidade">Informe a sua cidade</label>
      <input
        id="cidade"
        type="text"
        value={props.cidade}
        onChange={(event) => props.setCidade(event.target.value)}
        onKeyDown={apertouTecla}
      />
    </>
  );
};

export default Input;
