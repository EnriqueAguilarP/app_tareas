import React from 'react';
import logo from './imagenes/logo.png';
import './App.css';
import ListaTareas from './componentes/ListaTareas';

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
        <ListaTareas />
      </div>

    </div>
  );
}

export default App;
