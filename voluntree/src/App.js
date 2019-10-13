
import React, {useState} from 'react';
import './App.css';
import CausesPage from './pages/CausesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App= () => {
    const [page, setPage] = useState("LandingPage");

    const Page = ({page}) => {
        switch (page) {
            case 'LandingPage':
                return <LandingPage onSubmit={() => {setPage("CausesPage")}}/>;
                break;
            case 'CausesPage':
                return <CausesPage/>;
                break;
            default:
                return <LandingPage onSubmit={() => {setPage("CausesPage")}}/>
        }
    }

    return (
        <div style={{
            background: 'url(/res/earth-bckg.jpg)',
            height:'100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Page page={page}/>
        </div>
    );
};

export default App;