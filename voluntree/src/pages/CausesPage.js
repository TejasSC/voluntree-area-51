import React from "react";
import {Container} from "react-bootstrap";
import Slider from "../components/Slider";

const slideData = [
    {
        index: 0,
        headline: 'Deforestation',
        button: 'Help',
        src: '/res/deforestation.jpg'
    },
    {
        index: 1,
        headline: 'Global Warming',
        button: 'Help',
        src: '/res/global-warming.jpg'
    },
    {
        index: 2,
        headline: 'Poverty',
        button: 'Help',
        src: '/res/donation.jpg'
    },
    {
        index: 3,
        headline: 'Pollution',
        button: 'Help',
        src: '/res/pollution.jpg'
    }
];

const CausesPage = () => {
    return (
        <Container style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Slider heading="Example Slider" slides={slideData} />
        </Container>
    );
};

export default CausesPage;