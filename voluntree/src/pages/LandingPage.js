import {Container, Form, Button} from "react-bootstrap";
import React from 'react';

const LandingPage = (props) => {
    const backgroundImageSrc1 = "/res/forest-background.jpg";
    const backgroundImageSrc2 = "/res/planet-bckg.jpg";

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
                    <Form onSubmit={props.onSubmit}>
                        <Form.Control size="lg" type="text" placeholder="Postcode"/>
                    </Form>
                    <br/>
                </div>
            </Container>
        </div>
    );
};



export default LandingPage;