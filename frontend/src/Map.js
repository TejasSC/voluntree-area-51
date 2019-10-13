import React from "react";
import {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import CityPin from "./Pin";

class Map extends Component {
    constructor(props)
    {
       super(props);
       this.state = {
        viewport: {
          width: props.width,
          height: props.height,
          latitude: props.latitude,
          longitude: props.longitude,
          zoom: 8
        },
        events: [
            {
                name: "Event One",
                latitude: 37.87,
                longitude: -122.41
            },
            {
                name: "Event Two",
                latitude: 37.78,
                longitude: -122.41
            }
        ],
        "selected_event": ""
        };
    }

  render() {
    var markers = [];
    this.state.events.forEach(event => {
        markers.push(<Marker latitude={event.latitude} longitude={event.longitude} ><CityPin /></Marker>)
         
     });
    return (
        <div>
      <ReactMapGL mapboxApiAccessToken={"pk.eyJ1Ijoia2F5c2Fnb2UiLCJhIjoiY2l3cTkwejM4MDAxNDJ5b2VlNnQ4ZmQ4cSJ9.kU0ASnOu-NqPemAQ0YLXFg"}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}>
            {markers}
            
      </ReactMapGL>
      <div>{this.state.selected_event}</div>
      </div>
    );
  }
}

export default Map;