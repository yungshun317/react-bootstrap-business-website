import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
	return (
		<Container fluid>
		    <Navbar bg="light" expand="lg">
		        <Navbar.Brand href="#home">Business Website</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		        </Navbar.Collapse>
		    </Navbar>
		    <Row>
		        <Col xs={12} sm={6} lg={8} className="bg-info text-white">xs=12 sm=6 lg=8</Col>
		        <Col sm={6} lg={4} className="bg-primary text-white">sm=6 lg=4</Col>
		    </Row>
		    <Row>
		        <Col xs={6} sm={4} className="bg-info text-white">xs=6 sm=4</Col>
		        <Col xs={6} sm={4} className="bg-primary text-white">xs=6 sm=4</Col>
		        <Col xs={6} sm={4} className="bg-success text-white">xs=6 sm=4</Col>
		    </Row> 
		    <Row>
		        <Col xs={6} className="bg-info text-white">xs=6</Col>
		        <Col xs={6} className="bg-primary text-white">xs=6</Col>
		    </Row>
		</Container>
	);
}