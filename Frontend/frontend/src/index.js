import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './Login';
import Publicacion from './Publicacion/Publicacion'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="publicacion" element={<Publicacion />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
