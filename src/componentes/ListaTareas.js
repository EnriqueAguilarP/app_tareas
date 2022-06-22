import React, { useState } from "react";
import Formulario from "./Formulario";
import '../hojaEstilos/ListaTareas.css';
import Tarea from './Tarea';

function ListaTareas(){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ... tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const finalizarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.finalizada = !tarea.finalizada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }


    return(
        /*Uso fragmentos*/ 
        <>
            <Formulario onSubmit = {agregarTarea} />
            <div className="lista-tareas">
                {
                    tareas.map((tarea) => 
                        <Tarea 
                            key = {tarea.id}
                            id= {tarea.id}
                            texto = {tarea.texto}
                            finalizada = {tarea.finalizada}
                            finalizarTarea = {finalizarTarea}
                            eliminarTarea = {eliminarTarea}
                        />

                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;