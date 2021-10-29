import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data=>setServices(data))
    }, [])
    


    return (
        <div className="bg-color">
            <div id="services" className="container py-5 ">
                <h1 className="text-center p-5">Our Promise For A New Kind Of Caring</h1>
            <div className="row">
            {
                services?.map(service=>
                    <div
                        key={service._id}
                        className="col-md-3 g-4">
                    <Card className="h-100 w-100 card-style">
                    <Card.Img className="img-fluid" variant="top" src={service.imageURL} />
                    <Card.Body className="d-flex flex-column justify-content-end rounded card-text">
                        <Card.Title className="fw-bold">{service.name}</Card.Title>
                        <Card.Text>
                        {service.description.slice(0,100)}
                        </Card.Text>
                        <Link to={`/service/${service._id}`}>
                            <Button className="btn-grad">Details</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </div>)
            }
            </div>
        </div>
        </div>
    );
};

export default Services;