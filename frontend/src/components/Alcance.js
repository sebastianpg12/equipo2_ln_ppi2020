import React from "react";
import "../Estilosinformacion.css"

export const Alcance = (props) => {
  const {history}= props;
  return (
    <div className="Alcance">
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
        <h2>Alcance</h2>
        <p>La aplicación consistirá de 4 fases:</p>
        <ul>
            <li>Realizar una base de datos que permita tener la información de cada uno de los estudiantes que hacen uso del comedor institucional.</li>
            <br/>
            <li>Crear un dispositivo con la plata innobot que sea capaz de leer la información de una tarjeta, con ayuda de un boat que maneje su configuración.</li>
            <br/>
            <li>Diseñar tres tarjetas de prueba, con su respectiva configuración que reconozca al estudiante y sus necesidades alimenticias, referente a la tabla nutricional.</li>
            <br/>
            <li>Implementar una página web por medio de un lenguaje de programación (HTML), con la información requerida como los bocetos, los contactos y las imágenes de la aplicación “Restaurante Escolar”.</li>
        </ul>
        <br/>
        <img src="./img/img3.png" alt="restaurante"/>
    </div>

      </div>
        </div>
    </div>
    
  );
};