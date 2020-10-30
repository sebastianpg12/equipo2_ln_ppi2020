import React from "react";
import "../Estilosinformacion.css"

export const Informacion = (props) => {
  const {history}= props;
  return (
    <div className="Información">
        <a href="/"><img src="/img/back.png" className="imgb"  width="38px" height="30px" /></a>
        <div>  
        <div className="topnav" id="myTopnav">
        <a href="/informacion">Visión</a>
        <a href="/alcance">Alcance</a>
        <a href="/objetivos">Objetivos</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
        <div class="content">
        <h2>Visión</h2>
        <p> Es un servicio para los estudiantes que hacen uso del restaurante escolar de la Institución Educativa Las Nieves, la cual tiene la necesidad de mejorar la entrega de los alimentos y disminuir la perdida de los mismos. La aplicación lleva por nombre Restaurante Escolar, y permite llevar el control y seguimiento de la distribución de alimentos suministrados por el PAE (Programa de Alimentación Escolar); se busca una nueva alternativa para darle manejo constante a los productos alimenticios, y se diferencia a los proyectos similares debido al que nuestro se enfoca a las instituciones para un mejor proceso de quienes hacen parte.</p>
        <br/>
        <img src="./img/img2.png" alt="restaurante"/>
    </div>
      </div>
        </div>
    </div>
    
  );
};