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
		                <Col>
		                    <h1>Welcome to <span>Business Website</span></h1>
		                    <h2>We are team of talented designers making websites with React and Bootstrap</h2>
		                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
		                </Col>
		            </Row>
		        </Container>
		    </section>
	     	<main id="main">
		        <section id="about" className="about">
		            <Container>
		                <Row>
		                    <Col>
		                        <h2 className="title d-flex justify-content-center">About</h2>
		                        <h3 className="d-flex justify-content-center">Find Out More <span>About Us</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={6}><img src="https://picsum.photos/200/300" className="img-fluid" /></Col>
		                    <Col lg={6}>
		                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="font-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
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