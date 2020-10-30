import React from "react";
import "../index.css"

export const Registro = () => {
  return (
    <div className="Registro">
      <a href="/"><img src="/img/back.png" className="imgb"  width="38px" height="30px" /></a>
    <h1 className="titulo">Registro</h1>

<div className="container">
<form action="/action_page.php">
<div className="row">
  <div className="col-25">
    <label for="fname">Correo Electronico</label>
  </div>
  <div className="col-75">
    <input type="text" id="fname" name="Correo" placeholder="Correo electronico" />
  </div>
  <div className="col-25">
    <label for="fname">Matricula</label>
  </div>
  <div className="col-75">
    <input type="text" id="fname" name="Matricula" placeholder="Escribe aqui tu numero de matricula, si no escribe 1" />
  </div>
</div>
<div className="row">
  <div className="col-25">
    <label for="lname">Contraseña</label>
  </div>
  <div className="col-75">
    <input type="text" id="lname" name="lastname" placeholder="Ingresar contraseña" />
   </div>

   <div className="col-25">
    <label for="lname">Confirmar Contraseña</label>
  </div>
  <div className="col-75">
    <input type="text" id="lname" name="lastname" placeholder="Confirmar Contraseña" />
   </div>
</div>
<div className="row">
  <div className="col-25">
    <label for="country">Tipo Usuario</label>
  </div>
  <div className="col-75">
    <select id="country" name="country">
      <option value="administrador">Administrador</option>
      <option value="estudiante">Estudiante</option>
      <option value="profesor">Profesor</option>
    </select>
  </div>
</div>
<br /><br />
<div className="row">

   <a href="/sesioniniciada"><input type="submit" value="Siguiente"/></a>
  
</div>
</form>
</div>
  </div>
);
};