import React, { useState } from 'react';
import './SingleCausePage.css';
import Popup from '../components/Popup';
import MapController from '../components/MapController';



const SingleCausePage = () => {
    const backgroundImageSrc = "/logo.jpg";

    const [popup, setPopup] = useState(false);

    return (
        <div class='hate' style={{
            background: 'url(' + backgroundImageSrc + ')',
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            align: 'center'
        }}>
        <button class="btn btn-success" onClick={() => setPopup(true)}> Click To Create Event</button>

{ popup === true ?
<Popup
          //text='Click "Close Button" to hide popup'
          closePopup={() => setPopup(false)}
/>
: null
}
<MapController />
        </div>
    );
};

export default SingleCausePage;
