import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useLayout } from "./LayoutProvider";
import Paragraph from "./Paragraph";
import Image from "./Image";

export default function Section({
	row,
	children
}) {
	const { layout } = useLayout();
	const components = {
		"Paragraph": Paragraph,
		"Image": Image
	}

    return (
    	<section id="about" className="about">
    	    <Container>
    	        {
    	        	layout.map(block => 
    	        		<Row>
                            {block.children.map(column => {
                            	
                            	return (
                            		<Col 
                            		    className={column.class}
                            		    xs={column.xs}
                            		    sm={column.sm}
                            		    md={column.md} 
                            		    lg={column.lg}
                            		    xl={column.xl} 
                            		>
                            		    {block.row}, { column.col }, 

                                        {column.components.map(component => {
                                        	let DynamicComponent = components[`${component.name}`];
                                            return (
                                            <DynamicComponent />
                                        )})

                                        }
                            		    
                            		</Col>
                            	)
                            })}
                        </Row>
                    )
    	        }
    	    </Container>
    	</section>
    );

    /*
	return (
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
	)
	*/
}