import React, { useState } from 'react';

import Header from './components/Header'

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

            <ul>{
                projects.map((project, index) =>
                    <li key={index}>{project}</li>
                )
            }</ul>

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