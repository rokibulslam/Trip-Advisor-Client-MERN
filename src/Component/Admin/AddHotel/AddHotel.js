import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';



const AddHotel = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/hotels', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Hotel Added Successfully")
                    reset();
                }
        })
    }; // your form submit function which will invoke after successful validation




    return (
        <div>
            <h1>Add New Hotel</h1>
            <form className="m-5 d-flex flex-column w-50" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Hotel Name" {...register("name", { required: true })} />
                <br />
                <input type="number" placeholder="Price" {...register("price", { required: true })} />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <textarea placeholder="Description" {...register("Description", { required: true })} />
                <br />
                <input placeholder="imgURL" {...register("img", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <p>This field is required</p>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddHotel;