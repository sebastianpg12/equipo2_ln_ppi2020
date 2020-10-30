import React from "react";
import "../index.css";
import {Paginaloqueo} from "../components/Paginalogueo";
import {Registro} from "../components/Registro";
import {BrowserRouter,Route} from "react-router-dom";
import { NavbarIndex } from "../components/NavbarIndex";
import {Restaurante} from "../components/Restaurante";
import {Restaurantejust} from "../components/Restaurantejust";
import {Soporte} from "../components/Soporte";
import { Sesioniniciadaindex } from "../components/Sesioniniciadaindex";
import { Informacion } from "../components/Informacion";
import { Alcance } from "../components/Alcance";
import { Objetivos } from "../components/Objetivos";
import { Perfil } from "../components/Perfil";

export default function RestauranteContainer() {
  return (
    <BrowserRouter className="RestauranteContainer">
    <Route path='/' exact component={NavbarIndex}/>
    <Route path='/paginaLogin' exact component={Paginaloqueo}/>
    <Route path='/registro' exact component={Registro}/>
    <Route path='/soporte' exact component={Soporte}/>
    <Route path='/restaurante' exact component={Restaurante}/>
    <Route path='/restaurantejust' exact component={Restaurantejust}/>
    <Route path='/sesioniniciada' exact component={Sesioniniciadaindex}/>
    <Route path='/informacion' exact component={Informacion}/>
    <Route path='/alcance' exact component={Alcance}/>
    <Route path='/objetivos' exact component={Objetivos}/>
    <Route path='/perfil' exact component={Perfil}/>
  </BrowserRouter>
  );
}