import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import LayoutProvider from "./LayoutProvider";
import Layout from "./Layout";

export default function App() {
	return (
		<>
		    <Navbar bg="light" expand="lg">
		        <Navbar.Brand href="#home">Business Website</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		            <Nav className="ml-auto">
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
		    <LayoutProvider>
		        <Layout />
		    </LayoutProvider>
		    <footer>
		        This is footer.
		    </footer>
		</>
	);
}