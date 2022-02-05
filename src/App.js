import React, { useState } from "react";

import html2canvas from "html2canvas";

import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./App.css";
import "tailwindcss/tailwind.css";
import TextTransition, { presets } from "react-text-transition";

function App() {
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };
  const options = [
    { value: "futurama", label: "fffffff" },
    { value: "emma", label: "Desarrollador" },
    {
      value: "fire",
      label: "lol",
    },
    { value: "history", label: "history" },
    { value: "matrix", label: "matrix" },
    { value: "philosoraptor", label: "philosoraptor" },
    { value: "smart", label: "smart" },
  ];

  const [linea1, setLinea1] = useState("Escribe aquí");
  const [linea2, setLinea2] = useState("Despues aquí");
  const [imagen, setImagen] = useState("emma");
  const TEXTS = ["Generador de Memes"];

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="fondo-gradiente">
      <MDBContainer>
        <div className="App">
          <h1 className="App">
            <TextTransition className="App" text={TEXTS} />
          </h1>
          <h4 className="text-white margin-top">Selecciona la imagen</h4>
          <select onChange={onChangeImagen} className="">
            <option value="emma">Emmanuel Dev</option>
            <option value="fire">Casa en llamas</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Philosoraptor</option>
            <option value="smart">Smart Guy</option>
          </select>

          <div className="input-container margin-top">
            <input
              type="text"
              required=""
              onChange={onChangeLinea1}
              value={linea1}
            />
            <label>Frase Superior</label>
          </div>
          <div className="input-container margin-top">
            <input
              type="text"
              required="true"
              onChange={onChangeLinea2}
              value={linea2}
            />
            <label>Frase Inferior</label>
          </div>

          <br />
          <div className="meme margin-top" id="meme">
            <span>{linea1}</span> <br />
            <span>{linea2}</span>
            <img src={imagen + ".jpg"} />
          </div>

          <MDBBtn color="success" onClick={onClickExportar}>
            DESCARGA IMAGEN
          </MDBBtn>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
