import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className = "banner banner d-flex banner align-items-center justify-content-center" >
            <div div className = "row" >
            <div className="col-md-6 col-sm-12">
                <h1 className="text-white">free cancellation available! | discounts on clean hotels, homes & flights | best price guarantee! | over 20 million reviews | safe & secure</h1>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h4 className="text-white">Not sure Where to go?</h4>
                    <button className="rounded-pill p-3  fs-3 btn-text">I'm Flexible</button>
                </div>
        </div>
        </div>
    );
};

export default Banner;