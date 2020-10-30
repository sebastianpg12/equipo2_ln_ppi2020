import React from "react";
import "../restaurante.css"

export const Restaurante = (props) => {
  const {history}= props;
  return (
    <div className="Restaurante">
     <a href="/"><img src="/img/back.png" className="imgb"  width="38px" height="30px" /></a>
    <div className="perfil"><img src="img/perfil.png" className="sinblur" alt="" width="65px" /></div>
    <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Codigo QR</a>
        <a href="/restaurantejust">Justificación</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className="nombre">
        <h2 className="letras">Sebastián Pulgarín Gómez</h2>
      </div>

      <div className="codigo" >
          <img src="img/codigo_qr.png" width= "500px" height="500px" alt="" />

          <h4>Codigo manual: 7373736</h4>
      </div>
    </div>
  );
};
