import React from 'react';
import './Popup.css';

class Popup extends React.Component {
  render() {
return (
<div className='popup'>
<div className='popup\_inner'>
<h1>{this.props.text}</h1>

<form >
        <label>
          Name of the organizer:
          <input type="text"/>
        </label>

        <label>
          Cause of the event:
          <input type="text"/>
        </label>

        <label>
          Name of the event:
          <input type="text"  />
        </label>

        <label>
          Location of the event:
          <input type="text"  />
        </label>

        <label>
          Date and time of the event:
          <input type="text"  />
        </label>

      </form>


<button onClick={this.props.closePopup}>Create event</button>
</div>
</div>
);
}
}

export default Popup;
