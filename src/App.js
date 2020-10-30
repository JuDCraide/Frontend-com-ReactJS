import React, { useEffect, useState } from 'react';

import Header from './components/Header'
import api from './services/api'

import './App.css';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(res => {
            setProjects(res.data);
        });
    }, [])

    async function handleAddNewProject() {

    }

    return (
        <>
            <Header title="Projetos" />

            <ul>{
                projects.map(project =>
                    <li key={project.id}>{project.title}</li>
                )
            }</ul>

            <button type="button" onClick={handleAddNewProject}>
                Adicionar projetos
            </button>
        </>
    )
}

export default App;