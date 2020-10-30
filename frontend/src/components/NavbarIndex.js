import React from "react";
import "../index.css"
import  Logueoreg  from "../components/Logueoreg";
import { Juego } from "../components/Juego"
import { Link, withRouter } from 'react-router-dom';

export const NavbarIndex = (props) => {
  const {history}= props;
  return (
    <div className="Navbarindex">
      
      <img className="logo" src="/img/mejorado.png" alt="Imagen" />

      <div>
        <ul className="botonr">
          <li><a href="/restaurante">Restaurante</a></li>
        </ul>

        <div className="dropup">
          <button className="dropbtn">+</button>
          <div className="dropup-content">
            <a href="/informacion">Información</a>
            <a href="/soporte">Soporte</a>
          </div>
        </div>
        <Juego/>
      </div>
      <Logueoreg/>
    </div>
  );
};
export default withRouter (NavbarIndex);
//CONFIRMAR SI SIRVE 
//<a className="btn" onClick={()=> history.push('/soporte')}>Soporte</a>
//const {history}=props;