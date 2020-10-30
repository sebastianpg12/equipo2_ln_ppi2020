import React from "react";
import "../Restaurantejust.css"

export const Restaurantejust = (props) => {
  const {history}= props;
  return (
    <div className="Restaurantejust">
         <a href="/"><img src="/img/back.png" className="imgb"  width="38px" height="30px" /></a>
        <div>  
        <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Codigo QR</a>
        <a href="/restaurantejust">Justificación</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <br/><br/><br/><br/>
<div className="division">

<a href=""><img className="calendario" src="/img/calendario.png" width="120" height="120" /></a>

<h3 className="seldia">Seleccione el día</h3>
<br/>
<form action="">
    <label for="fname">Justificación</label>
    <input type="text" id="fname" name="firstname" placeholder="Escriba aquí su justificación" />
<div className="sub">
<br/><br/>
  <input className="botsub" type="submit" value="Enviar"></input>
  </div>
    
</form>

</div>
      


      </div>
    </div>
    
  );
};