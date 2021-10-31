import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/hotels/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        data.service = service
        data.email = user?.email;
        data.status = "pending"
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Order Successfully Placed for Approving")
                    reset();
                    
                }
            })
    };
    
    return (
        <div className="container">
            <h1>Place Your Booking </h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={service?.img} alt="" />
                    <h3 className="fw-bolder text-decoration-underline text-info">Hotel Name: {service?.name}</h3>
                    <p><b>Description:</b> {service?.Description}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <form className="m-5 d-flex flex-column w-50" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <p className="text-start">Name</p>
                <input {...register("name", { required: true })} />
                {errors.name && <p>This field is required</p>}
                <br />
                <p className="text-start">Phone no</p>
                <input type="number" {...register("phone", { required: true })} />
                {errors.phone && <p>This field is required</p>}
                <br />
                <p className="text-start">City</p>
                <input {...register("city", { required: true })} />
                {errors.city && <p>This field is required</p>}
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <p className="text-start">Country</p>
                <input {...register("country", { required: true })} />
                {errors.country && <p>This field is required</p>}
                <br />
                <p className="text-start">Date</p>
                <input readOnly defaultValue={dd + "/" + mm +"/" + yyyy}  {...register("date")} />
                {errors.date && <p>This field is required</p>}
                <br />
                {/* errors will return when field validation fails  */}
                

                <input type="submit" />
            </form>
                </div>
            </div>
        </div> 
            
    );
};

export default PlaceOrder;