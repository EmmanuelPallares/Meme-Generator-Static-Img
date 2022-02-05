import React, { Component } from "react";
import html2canvas from "html2canvas";
import { MDBBtn } from "mdb-react-ui-kit";
const onClickExportar = function (evento) {
  html2canvas(document.querySelector("#meme")).then((canvas) => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "meme.png";
    link.href = img;
    link.click();
  });
};
class BotonDescarga extends Component {
  render() {
    return (
      <div>
        <MDBBtn onClick={onClickExportar} className="margin-top" outline>
          Descargar imagen
        </MDBBtn>
      </div>
    );
  }
}

export default BotonDescarga;
