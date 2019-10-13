import React from "react";
import {Component} from 'react';

class EventList extends Component {
    constructor(props)
    {
       super(props);
       
    }

  render() {
    return (
        
    <div>
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    </div>
    );
  }
}

export default EventList;