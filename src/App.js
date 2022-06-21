import React from 'react';
import logo from './imagenes/logo.png';
import './App.css';
import Tarea from './componentes/Tarea.js';
import './hojaEstilos/tarea.css';
import './hojaEstilos/Formulario.css';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logo} 
          className = 'logo-imagen' 
          alt= 'imagen del logo de la pastelería'
          />
      </div>
      <div className='lista-tareas'>
        <h1>Mis Tareas</h1>
        <Tarea texto = 'Aprender React '/>
        <Formulario />
      </div>

    </div>
  );
}

export default App;
