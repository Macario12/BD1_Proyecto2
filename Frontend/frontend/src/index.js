import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';



//Component
import AddActividad from './Actividad/AddActividad';
import Publicacion from './Publicacion/Publicacion';
import AddExamen from "./Examen/AddExamen";
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="publicacion" element={<Publicacion />} />
      <Route path="examen" element={<AddExamen />} />
      <Route path="actividad" element={<AddActividad />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
