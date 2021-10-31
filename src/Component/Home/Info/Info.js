import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Info.css'

const Info = () => {
    return (
        <div className="p-5">
            <div className="container">
                <h1 className="p-3 fw-light">Best travel and tourism websites of 2021</h1>
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <p className="fs-3 text-start fw-lighter">Staying abreast about potential travel destinations is one of the most basic forms of information-hunting that globe-trotters and home-bodies alike endorse when planning to hit the road or board a plane. Different regions, countries, and even distinct areas in home communities provide escapism from the routine of everyday living and help broaden perspectives with local culture and unique natural environments.It’s easy to get caught up in what you already know about a travel destination, but a compelling visitor website helps returning and new tourists navigate which locations and other details will make the most out of their adventures, be they abroad, near home, or somewhere in between.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h2 className="text-start info-text ">Need help?</h2>
                        <h4 className="text-start">Tell us about your plan</h4>
                        <Form className="d-flex flex-column justify-content-start align-content-center ">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label></Form.Label>
                            <Form.Control placeholder="Adress" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label></Form.Label>
                            <Form.Control placeholder="How can we help you" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <button className="rounded-pill info-btn text-white p-2 fs-6 fw-bold"  type="submit">
                            Submit
                        </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;