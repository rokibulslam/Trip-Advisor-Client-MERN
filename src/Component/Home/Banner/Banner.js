import React from 'react';
import './Banner.css'
import pic from '../../../images/tourist.jpeg'
import { Button, Form } from 'react-bootstrap';


const Banner = () => {
    return (
      <div className="banner banner d-flex banner align-items-center justify-content-center">
        <div className="row">
          <Form>
            <div className="search-bar d-flex justify-content-center align-items-center align-content-center flex-column p-5 rounded rounded-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-1 text-black ">
                  Search Your Favourite Place
                </Form.Label>
                <Form.Control
                  className="w-100 rounded-pill"
                  type="text"
                  placeholder="Search"
                />
              </Form.Group>
              <button className="rounded  fs-3 btn-text">Search</button>
            </div>
          </Form>
        </div>
        <div className="col-md-6 col-sm-12"></div>
      </div>
    );
};

export default Banner;