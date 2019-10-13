import React from 'react';
import './App.css';
import { Form, Container } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Container style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div>
                    <Form.Control size="lg" type="text" placeholder="Postcode"/>
                    <br/>
                </div>
            </Container>
        </div>
    );
}

export default App;
