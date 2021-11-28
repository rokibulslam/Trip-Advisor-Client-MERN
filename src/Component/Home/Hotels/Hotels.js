import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Hotels.css'

const Hotels = () => {
  const [Hotels, setHotels] = useState([])
  const {setIsLoading, isLoading}= useAuth()

  useEffect(() => {
      setIsLoading(true)
        fetch("https://frightening-cat-78341.herokuapp.com/hotels")
          .then((res) => res.json())
          .then((data) => setHotels(data))
          .finally(() => setIsLoading(false));
    }, [])
    


    return (
      <div className="bg-color">
        <h1 className="explore-header">Inspiration for your next trip.</h1>
        <div id="hotels" className="container py-5 ">
          {isLoading && <Spinner animation="border" variant="danger" />}
          <div className="row">
            {Hotels?.map((hotel) => (
              <div key={hotel._id} className="col-md-3 g-4 col-sm-12">
                <Card className="h-100 w-100 card-style">
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={hotel.img}
                  />
                  <Card.Body className="d-flex flex-column justify-content-end rounded card-text">
                    <Card.Title className="fw-bold">{hotel.name}</Card.Title>
                    <Card.Text>{hotel.Description.slice(0, 100)}</Card.Text>
                    <Link to={`/placeOrder/${hotel._id}`}>
                      <Button className="btn-grad px-4 py-2 rounded text-white">Book Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Hotels;