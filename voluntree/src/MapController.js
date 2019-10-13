import React from 'react';
import { Component } from "react";
import EventList from "./EventList"
import { Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Map from "./Map";

export default class MapController extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            events: [
                {
                    name: "Event One",
                    latitude: 37.87,
                    longitude: -122.41
                },
                {
                    name: "Event Two",
                    latitude: 40.78,
                    longitude: -122.41
                }
            ],
            "selected_event": 0
        }
    }

    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">
                    <Col md="5">
                        <Map width={400} height={400} latitude={this.state.events[this.state.selected_event].latitude} longitude={this.state.events[this.state.selected_event].longitude} events={this.state.events}></Map>
                    </Col>
                    <Col md="4">
                        <EventList events={this.state.events} onClick={(event) => this.setState({selected_event: event})}/>
                    </Col>
                </Row>
                {this.state.selected_event}
            </Container>
        );
    }
}