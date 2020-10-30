import React from "react";
import "../soporte.css"

export const Soporte = () => {
  return (
    <div className="Soporte">
         <a href="/">Devolver</a>
        <div className="card-deck text center">
        <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h1 class="my-0 font-weight-normal">Reportar un problema</h1>
                </div>
                <div class="card-body">
                <div className="col-75">
                <input type="text" placeholder="Mensaje"/>
                </div>
                </div>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Enviar</button>
                </div>
            </div>
            <div class="card-header">
                <h1 class="my-0 font-weight-normal">Servicio de ayuda</h1>
                </div>
                <div class="card-body">
                <div className="col-75">
                <input type="text" placeholder="Mensaje"/>
                </div>
                </div>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Enviar</button>
                
                
                </div>
            
  );
};