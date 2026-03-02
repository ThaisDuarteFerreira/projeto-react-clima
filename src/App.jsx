import React from "react";
import Input from "./components/Input";
import Botao from "./components/Botao";
import Resultado from "./components/Resultado";
import "./Global.css";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const App = () => {
  const [cidade, setCidade] = React.useState("");
  const [dadosClima, setDadosClima] = React.useState(null);
  const [erro, setErro] = React.useState("");

  async function buscarClima() {
    if (cidade.trim() === "") return;

    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error("Cidade não encontrada");
      }

      setDadosClima(dados);
      setErro("");
    } catch (error) {
      setErro(error.message);
      setDadosClima(null);
    }
  }

  return (
    <div>
      <h1>Clima Agora</h1>

      <div className="container-comandos">
        <Input cidade={cidade} setCidade={setCidade} onBuscar={buscarClima} />
        <Botao onBuscar={buscarClima} />
      </div>
      <div className="container-resultados">
        <Resultado dadosClima={dadosClima} />
      </div>
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default App;
