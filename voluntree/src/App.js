
import React from 'react';
import './App.css';
import CausesPage from './pages/CausesPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {

    return (
        <div style={{
            background: 'url(/res/earth-bckg.jpg)',
            height:'100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <CausesPage/>
        </div>
    );
}

export default App;