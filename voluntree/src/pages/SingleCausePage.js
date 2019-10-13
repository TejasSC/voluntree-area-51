import React, { useState } from 'react';
import './SingleCausePage.css';
import Popup from '../components/Popup';



const SingleCausePage = () => {
    const backgroundImageSrc = "/logo.jpg";

    const [popup, setPopup] = useState(false);

    return (
        <div style={{
            background: 'url(' + backgroundImageSrc + ')',
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
        <button onClick={() => setPopup(true)}> Click To Launch Popup</button>

{ popup === true ?
<Popup
          //text='Click "Close Button" to hide popup'
          closePopup={() => setPopup(false)}
/>
: null
}
        </div>
    );
};

export default SingleCausePage;
