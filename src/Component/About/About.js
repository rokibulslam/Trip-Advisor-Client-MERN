import React from 'react';

const About = () => {
    return (
        <div className="py-5 my-3">
            <div className="container">
                <h1 className=" text-danger mb-4">About Us</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1 className="text-success">Travel your way</h1>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p className=" fs-3 fw-lighter">When we started in 2003, we set out to do things differently. We wanted to show all flight options in one place, creating a simple alternative to the confusing sites that make travel feel like hard work.</p>
                    <br />
                    <p className=" fs-3 fw-lighter">Fast forward to today and we’ve gone from a flight search engine to a global leader in travel. We're proud that more than 100 million people across the world (that's quite a few!) rely on our app and website each month to help them with their travel plans.</p>
                    <br />
                    <p className=" fs-3 fw-lighter">Dedicated to making travel as simple as possible, we help each and every one of them find the best options across flights, hotels and car hire to book the perfect trip.</p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default About;