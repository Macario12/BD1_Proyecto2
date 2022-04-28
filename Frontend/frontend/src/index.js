import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';



//Component
import PublicacionCRUD from './Publicacion/PublicacionCRUD';
import Notificacion from "./Notificaciones/Notificacion";
import AddActividad from './Actividad/AddActividad';
import Publicacion from "./Publicacion/Publicacion";
import AlumnoCRUD from "./Alumno/AlumnoCRUD";
import Actividad from "./Actividad/Actividad";
import AddExamen from "./Examen/AddExamen";
import Maestro from "./Maestro/Maestro";
import Alumno from "./Alumno/Alumno";
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="publicacioncrud" element={<PublicacionCRUD />} />
      <Route path="notificacion" element={<Notificacion />} />
      <Route path="addactividad" element={<AddActividad />} />
      <Route path="publicacion" element={<Publicacion />} />
      <Route path="alumnocrud" element={<AlumnoCRUD />} />
      <Route path="actividad" element={<Actividad />} />
      <Route path="examen" element={<AddExamen />} />
      <Route path="maestro" element={<Maestro />} />
      <Route path="alumno" element={<Alumno />} />
      <Route path="" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
