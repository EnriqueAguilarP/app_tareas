import React from "react";
import { BiMinusCircle } from "react-icons/bi";

function Tarea ({ texto, finalizada }) {
    return (
        <div className={ finalizada ? 'tarea-contenedor finalizada' : 'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <BiMinusCircle className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;