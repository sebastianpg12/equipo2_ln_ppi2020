import React from "react";
import "../perfil.css"

export const Perfil = () => {
  return (
    <div className="Perfil">
         <div className="container">
        
        <div className="container_cabecera">
            <div><p>volver</p></div>
            <div className="perfil">
                <img className="izquierda" src="img/perfil.png" width="80px" />
                <aside><h3><b>Sebastián Pulgarín</b></h3></aside>
                <aside><h5><b>Codigo de matricula: </b> <em>8383729</em> </h5></aside>
                <div className="reset"></div>
              </div>

              <div className="informe">
                <h2>Informe</h2>
              </div>

              <div className="perfil">
                
                <aside><h4><b>Asistencias Totales: </b> <em>72</em></h4></aside>
                <aside><h4><b>Faltas Totales: </b> <em>5</em></h4></aside>
                <div className="reset"></div>
              </div>


              <div className="informe">
                <h2>Datos</h2>
              </div>

              <div className="perfil">
                
                <aside><h4><b>Correo: </b> <em>pulgaringomezsebastian@gmail.com</em></h4></aside>
                <aside><h4><b>Contraseña: </b> <em>**********</em></h4></aside>
                <div className="reset"></div>
              </div>

              <div className="botones">
                <button className="btncc">Cambiar Correo</button>
                <button className="btnc">Cambiar Contraseña</button>
                </div>

              </div>

              </div>
              
        </div>
    
  );
};