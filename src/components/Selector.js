import React, { useState } from "react";
import InputsTexts from "./InputsTexts";
import Select from "react-select";

function Selector() {
  const options = [
    { value: "futurama", label: "futurama" },
    { value: "history", label: "history" },
    { value: "matrix", label: "matrix" },
    { value: "philosoraptor", label: "philosoraptor" },
    { value: "smart", label: "smart" },
  ];
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };
  return (
    <div>
      {/* <select onChange={onChangeImagen} className="margin-top">
        <option>Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> */}
      <Select
        onChange={onChangeImagen}
        selectOption={options}
        options={options}
      />
      <br />
      <InputsTexts />
      {/* <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="Linea 1"
        className="margin-top-inputs-text linea1"
      />{" "} */}
      <br />
      {/* <input
        onChange={onChangeLinea2}
        type="text"
        placeholder="Linea 2"
        className="margin-top-inputs-text"
      />{" "} */}
      <div className="meme margin-top" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default Selector;
