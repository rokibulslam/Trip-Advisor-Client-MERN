import React from 'react';
import './ServiceBar.css'

const ServiceBar = () => {
    return (
        <div className="row">
            <div className="col-md-3 service1">
                <h3 className
                ="p-3 text-center text-white">HOTELS SERVICE</h3>
            </div>
            <div className="col-md-3 service2">
                <h3 className="p-3 text-center text-white">Flight SERVICE</h3>
            </div>
            <div className="col-md-3 service3">
                <h3 className
                ="p-3 text-center text-white">RESTAURANT SERVICE</h3>
            </div>
            <div className="col-md-3 service4 text-center text-white">
                <h3 className
                ="p-3 text-center text-white">LUXURIOUS DESTINATIONS</h3>
            </div>
        </div>
    );
};

export default ServiceBar;