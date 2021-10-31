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
        axios.post('https://frightening-cat-78341.herokuapp.com/hotels', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Hotel Added Successfully")
                    reset();
                    window.location.reload()
                }
        })
    }; // your form submit function which will invoke after successful validation




    return (
        <div>
            <h1>Add New Hotel</h1>
            <div className="d-flex justify-content-center align-content-center">
                <form className="m-5 d-flex flex-column w-50" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <p className="text-start">Name</p>
                <input {...register("name", { required: true })} />
                {errors.name && <p>This field is required</p>}
                <br />
                <p className="text-start">Price</p>
                <input type="number" {...register("price", { required: true })} />
                {errors.number && <p>This field is required</p>}
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <p className="text-start">Description</p>
                <textarea {...register("Description", { required: true })} />
                {errors.Description && <p>This field is required</p>}
                <br />
                <p className="text-start">Image Url</p>
                <input {...register("img", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.img && <p>This field is required</p>}

                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddHotel;