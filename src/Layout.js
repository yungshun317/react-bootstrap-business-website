import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useLayout } from "./LayoutProvider";

export default function Layout() {
	const { layout } = useLayout();

	if (!layout.length) return <div>No layout designed.</div>

    return (
        <>
            <section id="hero" className="d-flex align-items-center">
		         <Container fluid>
		            <Row>
		                <Col lg={12}><h1>Welcome to <span>Business Website</span></h1></Col>
		                <Col lg={12}><h2>We are team of talented designers making websites with React and Bootstrap</h2></Col>
		                <Col lg={12}>
		                    <a href="#about" class="btn-get-started scrollto">Get Started</a>
		                </Col>
		            </Row>
		        </Container>
		    </section>
	     	<main id="main">
		        <section id="about" className="about">
		            <Container>
		                <Row>
		                    <Col lg={12}><h2 className="title d-flex justify-content-center">About</h2></Col>
		                    <Col lg={12}><h3 className="d-flex justify-content-center">Find Out More <span>About Us</span></h3></Col>
		                    <Col lg={12}><p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p></Col>
		                </Row>
		                
		            </Container>
		        </section>
	     	</main>
		</>
    )

    /*
	return (	
		<Container fluid>
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
    )
    */
}