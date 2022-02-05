import React, { useState } from "react";
import "../App.css";

function InputsTexts() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  console.log(onChangeImagen);
  console.log(onChangeLinea2);
  return <div></div>;
}

export default InputsTexts;
