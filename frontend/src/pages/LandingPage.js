import {Container, Form} from "react-bootstrap";
import React from 'react';

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
};

export default LandingPage;