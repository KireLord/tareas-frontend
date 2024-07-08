import React from 'react';
import './index.css'; // Asegúrate de que se está importando el archivo de estilos correcto
import TareasList from './TareasList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestión de Tareas</h1>
      </header>
      <main className="main">
        <TareasList />
      </main>
    </div>
  );
}

export default App;
