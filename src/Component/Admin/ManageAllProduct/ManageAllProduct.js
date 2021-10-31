import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllProduct = () => {
    const [Hotels, setHotels] = useState([])
    const [deletes, setDelete] = useState('')
    useEffect(() => {
        fetch("http://localhost:5000/hotels")
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [deletes])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure? You are going to cancel your order')

        if (confirm) {
            axios.delete(`http://localhost:5000/deleteService/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Your Order Has Canceled")
                    }
                })
                .then(data => setDelete(data))
        }
    }
    return (
        <div className="bg-color">
            <div id="hotels" className="container py-5 ">
                <h1 className="text-center p-5">Manage Hotel Services</h1>
            <div className="row">
            {
                Hotels?.map(hotel=>
                    <div
                        key={hotel._id}
                        className="col-md-3 g-4">
                    <Card className="h-100 w-100 card-style">
                    <Card.Img className="img-fluid" variant="top" src={hotel.img} />
                    <Card.Body className="d-flex flex-column justify-content-end rounded card-text">
                        <Card.Title className="fw-bold">{hotel.name}</Card.Title>
                        <Card.Text>
                        {hotel.Description.slice(0, 100)}
                        </Card.Text>
                        <div className="d-flex justify-content-around">
                            <Button>Book Now</Button>
                            <Button onClick={()=>{handleDelete(hotel._id)}} className="btn-danger">Delete</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>)
            }
            </div>
        </div>
        </div>
    );
};

export default ManageAllProduct;