import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
	return (
		<Container fluid>
		    <Navbar bg="light" expand="lg">
		        <Navbar.Brand href="#home">Business Website</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		            <Nav className="mr-auto">
		                <Nav.Link href="#home">Home</Nav.Link>
		                <Nav.Link href="#link">Link</Nav.Link>
		                <NavDropdown title="Dropdown" id="basic-navbar-dropdown">
		                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		                    <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		                </NavDropdown>
		            </Nav>
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