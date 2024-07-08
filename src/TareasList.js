import React, { useState } from 'react';
import axios from 'axios';

const TareasList = () => {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fechaIni, setFechaIni] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const fetchTareas = async (fecha_ini, fecha_fin) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/tareas_pasadas/?fecha_ini=${fecha_ini}&fecha_fin=${fecha_fin}`);
            setTareas(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching the data', error);
            setLoading(false);
        }
    };

    const handleFetchTareas = () => {
        if (fechaIni && fechaFin) {
            fetchTareas(fechaIni, fechaFin);
        }
    };

    return (
        <div>
            <h1>Tareas Pasadas</h1>
            <div className="form-container">
                <label>
                    Fecha Inicio:
                    <input 
                        type="date" 
                        value={fechaIni} 
                        onChange={(e) => setFechaIni(e.target.value)} 
                    />
                </label>
                <label>
                    Fecha Fin:
                    <input 
                        type="date" 
                        value={fechaFin} 
                        onChange={(e) => setFechaFin(e.target.value)} 
                    />
                </label>
                <button onClick={handleFetchTareas}>Buscar Tareas</button>
            </div>
            {loading ? <p>Loading...</p> : 
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Tarea</th>
                            <th>Empleado</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Días Pasados</th>
                            <th>Proyecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas.map(tarea => (
                            <tr key={tarea.tarea}>
                                <td>{tarea.tarea}</td>
                                <td>{tarea.empleado}</td>
                                <td>{tarea.fecha_inicio}</td>
                                <td>{tarea.fecha_fin}</td>
                                <td>{tarea.dias_pasados}</td>
                                <td>{tarea.proyecto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default TareasList;
