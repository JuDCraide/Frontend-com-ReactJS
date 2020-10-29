import React from 'react';

import Header from './components/Header'

function App() {
    return (
        <>
            <Header title="Home Page">
                <ul>
                    <li>Home Page</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>API com Node</li>
                    <li>Frontend com React</li>
                </ul>
            </Header>
            <h2>Hello World</h2>
        </>
    )
}

export default App;