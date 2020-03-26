import React, { useState } from 'react';
import './App.css';

const App = () => {

  const handleClick = tareaABorrar => {
    console.log(tareaABorrar)

    listaDeTareas = listaDeTareas.filter(tarea => tarea !== tareaABorrar)
    console.log(listaDeTareas)
  }

let listaDeTareas = ["Planchar", "Lavar", "Llorar en la ducha", "Alimentar al gato", "Ponerle 250cc de tequila al idem"]
  return (
    <div>
      {listaDeTareas.map((tarea, i) => (
        <div key={i}>
        <span>{tarea}</span>
        <button onClick={() => handleClick(tarea)}>Borrar tarea</button>
        </div>
      ))}
    </div>
  );
}

export default App;
