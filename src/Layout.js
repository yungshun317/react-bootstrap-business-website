import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "boxicons";

import { useLayout } from "./LayoutProvider";
import Section from "./Section";

export default function Layout() {
	const { layout } = useLayout();

	if (!layout.length) return <div>No layout designed.</div>

    return (
        <>
            <Section />
        </>
    )

    /*
    return (
        <>
            {
                layout.map(section =>
                    <Section
                        key={section.id}
                        {...section}
                    />)
            }
        </>
    )
    */

    /*
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
		        <section id="team" className="team">
		            <Container>
		                <Row>
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">Team</h2>
		                        <h3 className="d-flex justify-content-center">Our Hardworking<span>Team</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={3} md={6}>
                                <div className="member">
                                    <div className="member-img">
                                        <img src="https://picsum.photos/200" className="img-fluid" />
                                        <div className="social">
                                            <a href=""><i className="bx bxl-twitter"></i></a>
                                            <a href=""><i className="bx bxl-facebook-square"></i></a>
                                            <a href=""><i className="bx bxl-instagram"></i></a>
                                            <a href=""><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6}>
                                <div className="member">
                                    <div className="member-img">
                                        <img src="https://picsum.photos/200" className="img-fluid" />
                                        <div className="social">
                                            <a href=""><i className="bx bxl-twitter"></i></a>
                                            <a href=""><i className="bx bxl-facebook-square"></i></a>
                                            <a href=""><i className="bx bxl-instagram"></i></a>
                                            <a href=""><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6}>
                                <div className="member">
                                    <div className="member-img">
                                        <img src="https://picsum.photos/200" className="img-fluid" />
                                        <div className="social">
                                            <a href=""><i className="bx bxl-twitter"></i></a>
                                            <a href=""><i className="bx bxl-facebook-square"></i></a>
                                            <a href=""><i className="bx bxl-instagram"></i></a>
                                            <a href=""><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6}>
                                <div className="member">
                                    <div className="member-img">
                                        <img src="https://picsum.photos/200" className="img-fluid" />
                                        <div className="social">
                                            <a href=""><i className="bx bxl-twitter"></i></a>
                                            <a href=""><i className="bx bxl-facebook-square"></i></a>
                                            <a href=""><i className="bx bxl-instagram"></i></a>
                                            <a href=""><i className="bx bxl-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Creative Director</span>
                                </div>
		                    </Col>
		                </Row>
		            </Container>
		        </section>
		        <section id="pricing-table" className="pricing-table">
		            <Container>
		                <Row>
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">Pricing Table</h2>
		                        <h3 className="d-flex justify-content-center">Check our <span>Pricing Table</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={3} md={6}>
		                        <div className="box">
                                    <h3>Free</h3>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                </div>
                                <div class="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6}>
		                        <div className="box">
                                    <h3>Free</h3>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                </div>
                                <div class="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6}>
		                        <div className="box">
                                    <h3>Free</h3>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                </div>
                                <div class="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
		                    </Col>
		                </Row>
		            </Container>
		        </section>
		        <section id="form" className="form">
		            <Container>
		                <Row>
		                    <Col className="bg-success">
		                        <h2 className="title d-flex justify-content-center">Contact</h2>
		                        <h3 className="d-flex justify-content-center"><span>Contact Us</span></h3>
		                        <p className="d-flex justify-content-center">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={6} className="bg-info">
		                        <div class="info-box">
                                    <i class="bx bx-map"></i>
                                    <h3>Our Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6} className="bg-primary">
		                        <div class="info-box">
                                    <i class="bx bx-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>contact@example.com</p>
                                </div>
		                    </Col>
		                    <Col lg={3} md={6} className="bg-warning">
		                        <div class="info-box">
                                    <i class="bx bx-phone-call"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
		                    </Col>
		                </Row>
		                <Row>
		                    <Col lg={6} className="bg-secondary">
		                        <p>Here is the Map.</p>
		                    </Col>
		                    <Col lg={6} className="bg-danger">
		                        <p>Here is the form.</p>
		                    </Col>
		                </Row>
		            </Container>
		        </section>
	     	</main>
		</>
    )
    */

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