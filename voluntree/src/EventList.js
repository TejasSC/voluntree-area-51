import React from "react";
import {Component} from 'react';
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";

class EventList extends Component {
    constructor(props)
    {
       super(props);
    }

  render() {
    var items = [];
    this.props.events.map((event, index) => items.push(<ListGroupItem onClick={() => this.props.onClick(index)}>{event.name}</ListGroupItem>))
    return (
        <ListGroup> 
            {items}
        </ListGroup>
    );
  }
}

export default EventList;