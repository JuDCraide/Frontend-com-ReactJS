import React, { useState } from 'react';

import Header from './components/Header'

import backgroundImage from './assets/backgroundImage.jpg';
import './App.css';

function App() {

    const projects = ['API com Node', 'Frontend com React']
    const [projectsInState, setProjectsInState] = useState(['API com Node', 'Frontend com React']);

    function handleAddNewProject() {
        projects.push(`Novo projeto ${Date.now()}`);
        setProjectsInState([...projectsInState, `Novo projeto ${Date.now()}`]);

        console.log("Projects sem estado", projects);
    }

    return (
        <>
            <Header title="Home Page" />
            <img src={backgroundImage} width={200} alt="Foguete rumo ao próximo nível" />

            <ul>{
                projectsInState.map((project, index) =>
                    <li key={index}>{project}</li>
                )
            }</ul>

            <button
                type="button" onClick={handleAddNewProject}>Adicionar projetos</button>
        </>
    )
}

export default App;