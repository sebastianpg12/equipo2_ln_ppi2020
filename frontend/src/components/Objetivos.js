import React from "react";
import "../Estilosinformacion.css"

export const Objetivos = (props) => {
  const {history}= props;
  return (
    <div className="Objetivos">
        <a href="/"><img src="/img/back.png" className="imgb"  width="38px" height="30px" /></a>
        <div>  
        <div className="topnav" id="myTopnav">
        <a href="/informacion">Visión</a>
        <a href="/alcance">Alcance</a>
        <a href="/objetivos">Objetivos</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
        <div class="contento">
        <h2>Objetivo General</h2>
        <p>Diseñar una plataforma que permita el control y seguimiento del restaurante escolar de la Institución Educativa Las Nieves.</p>
      </div>
      <hr/>
      <div class="content">
        <h2>Objetivos Específicos</h2>
       <ul>
           <li>Cumplir con los requerimientos establecidos en los módulos que se ven en el grado 11°.</li>
           <li>Crear una base de datos, con los usuarios que harán uso de la plataforma.</li>
           <li>Diseñar la plataforma con librería React.</li>
       </ul>
       <br/>
       <img src="./img/img1.png" alt="restaurante"/>
    </div>

      </div>
        </div>
    </div>
    
  );
};