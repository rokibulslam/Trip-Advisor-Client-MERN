import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'



const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}size="2x" />
    const twitter = <FontAwesomeIcon icon={faTwitter}size="2x" />
    const instgaram = <FontAwesomeIcon icon={faInstagram}size="2x" />
    return (
        <div>
            <div className="footer-bg overflow-hidden text-white fw-light p-5">
            <h1 className="fs-1 text-center pb-3 text-warning">Tourist Advisor</h1>
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                    <li className="fw-bold">Explore Tourist</li>
                    <li>List Your Property</li>
                    <li>Book with Confidence</li>
                    <li>Trust And Safety</li>
                    <li>Partner resources</li>
                    <li>Vacation rental guides</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                    <li className="fw-bold">Meet the Tourist family</li>
                    <li>Tourist</li>
                    <li>Abritel.fr</li>
                    <li>FeWo-direkt.de</li>
                    <li>Bookabach.co.nz</li>
                    <li> Stayz.com.au</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                <li className="fw-bold">Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Affiliate </li>
                <li>Media Center</li>
                <li>Adevertising</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                <li className="fw-bold">Get special offers, travel inspiration, and more from Vrbo</li>
                
                </ul>
                <Form.Control type="email" placeholder="Enter Your Email" />
                        <Button className="m-3">Subscribe</Button>
                        <div className="pt-3">
                            <a className="px-2 text-white" href="https://www.facebook.com/" >{facebook}</a>
                    <a className="px-2 text-white" href="https://www.facebook.com/" >{instgaram}</a>
                    <a className="px-2 text-white"  href="https://www.facebook.com/">{twitter}</a>
                        </div>
            </div>
        </div>
        </div>    
        </div>
            <div>
                <p className="text-white bg-dark p-5 mb-0
                text-center">Copyright © 2020. All Rights Reserved. Tourist Advisor</p>
            </div>
        </div>
    );
};

export default Footer;