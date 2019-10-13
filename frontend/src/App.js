import React from 'react';
import './App.css';
import { Form, Container } from 'react-bootstrap';

function App() {

    return (

            <LandingPage />
    );
}

const LandingPage = () => {
    const backgroundImageSrc1 = "/res/forest-background.jpg";
    const backgroundImageSrc2 = "/res/forest-helicopter.jpg";

    return (
        <div style={{
            background: 'url(' + backgroundImageSrc2 + ')',
            height:'100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
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
