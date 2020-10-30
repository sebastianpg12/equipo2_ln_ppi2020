import React from "react";
import "../index.css"
import { withRouter } from 'react-router-dom';

 const Logueoreg = (props) => {
  const {history}=props;
  return (
    <div className="Logueoreg">
        <div>
        <ul className="botonr1">
          <li><a href="" onClick={()=> history.push('/registro')}>Registro</a></li>
        </ul>
        <ul className="botonr2">
          <li><a href="" onClick={()=> history.push('/paginaLogin')}>Iniciar Sesión</a></li>
        </ul>
        
        </div>
    </div>
    
  );
};
export default withRouter (Logueoreg);