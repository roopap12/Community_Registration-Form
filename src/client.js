import React from 'react';
import Form from './Form';

function App() {
    console.log('Rendering App (client.js)');
    return (
        <div className="app-container">
            {/* <h1>Hello, I am the App!</h1> */}
            <Form />
        </div>
    );
}

export default App;
