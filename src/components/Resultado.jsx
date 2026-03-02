import React from "react";
import "./Resultado.css";

const Resultado = (props) => {
  return (
    <>
      {props.dadosClima && (
        <div>
          <p>Cidade: {props.dadosClima.name}</p>
          <p>Temperatura: {props.dadosClima.main.temp} °C</p>
          <p>Sensação térmica: {props.dadosClima.main.feels_like} °C</p>
          <p>Umidade: {props.dadosClima.main.humidity}%</p>
          <p>Clima: {props.dadosClima.weather[0].description}</p>
          <p>Vento: {props.dadosClima.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
};

export default Resultado;
