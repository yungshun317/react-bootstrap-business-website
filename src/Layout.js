import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "boxicons";

import { useLayout } from "./LayoutProvider";

export default function Layout() {
	const { layout } = useLayout();

	if (!layout.length) return <div>No layout designed.</div>

    return (
        <>
            <section id="hero" className="d-flex align-items-center">
		         <Container fluid>
		            <Row>
		                <Col className="bg-primary">
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
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">About</h2>
		                        <h3 className="d-flex justify-content-center">Find Out More <span>About Us</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={6} className="bg-info"><img src="https://picsum.photos/200/300" className="img-fluid" /></Col>
		                    <Col lg={6} className="bg-primary">
		                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="font-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>
                                        <div>
                                            <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                        </div>
                                    </li>
                                </ul>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Col>
		                </Row>
		            </Container>
		        </section>
		        <section id="services" className="services">
		            <Container>
		                <Row>
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">Services</h2>
		                        <h3 className="d-flex justify-content-center">Check our <span>Services</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bx-rocket"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bx-game"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bx-alarm-snooze"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bx-atom"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bx-chrome"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                    <Col lg={4} md={6} className="icon-box bg-info">
		                        <div className="icon d-flex justify-content-center"><i className="bx bxl-bitcoin"></i></div>
		                        <h4 className="d-flex justify-content-center"><a href="">Lorem Ipsum</a></h4>
                                <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		            </Container>
		        </section>
		        <section id="portfolio" className="portfolio">
		            <Container>
		                <Row>
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">Portfolio</h2>
		                        <h3 className="d-flex justify-content-center">Check our <span>Portfolio</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={12} className="d-flex justify-content-center">
		                            <li className="active" style={{display: "inline"}}>All</li>
		                            <li style={{display: "inline"}}>App</li>
		                            <li style={{display: "inline"}}>Card</li>
		                            <li style={{display: "inline"}}>Web</li>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={4} md={6} className="portfolio-item app">
		                        <img src="https://picsum.photos/200" class="img-fluid" />
		                        <div>
		                            <h4>App 1</h4>
                                    <p>App</p>
                                    <a href="https://picsum.photos/200" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                    <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
		                        </div>
		                    </Col>
		                
		                    <Col lg={4} md={6} className="portfolio-item web">
		                        <img src="https://picsum.photos/200" class="img-fluid" />
		                        <div>
		                            <h4>Web 1</h4>
                                    <p>Web</p>
                                    <a href="https://picsum.photos/200" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                    <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
		                        </div>
		                    </Col>
		                
		                    <Col lg={4} md={6} className="portfolio-item app">
		                        <img src="https://picsum.photos/200" class="img-fluid" />
		                        <div>
		                            <h4>App 2</h4>
                                    <p>App</p>
                                    <a href="https://picsum.photos/200" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                    <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
		                        </div>
		                    </Col>
		                
		                    <Col lg={4} md={6} className="portfolio-item card">
		                        <img src="https://picsum.photos/200" class="img-fluid" />
		                        <div>
		                            <h4>Card 1</h4>
                                    <p>Card</p>
                                    <a href="https://picsum.photos/200" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                    <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
		                        </div>
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