import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrder.css'

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [deletes, setDelete] = useState('')
    useEffect(() => {
        fetch('https://frightening-cat-78341.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deletes])

    const handlePending = (id) => {
        axios.put(`https://frightening-cat-78341.herokuapp.com/updateStatus/${id}`, {
            status: "Approved"
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Approved Order')
                    window.location.reload()
                }
            })
            .then(data => setDelete(data) )
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure? You are going to cancel your order')

        if (confirm) {
            axios.delete(`https://frightening-cat-78341.herokuapp.com/delete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Your Order Has Canceled")
                    }
                })
                .then(data => setDelete(data))
        }
    }
    return (
        <div  className = "mt-0 p-5 bg-order" >
            <div className="container ">
            <div>
                <h1 className="fw-light">Manage All Orders</h1>
            <Table Table striped bordered hover variant = "dark" >
            <thead>
                <tr>
                <th>#</th>
                <th>Ordered BY</th>
                <th>Adress</th>
                <th>Status</th>
                <th>Manage Order</th>
                </tr>
            </thead>
            {
                    orders?.map(order => (
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Customer Name: {order.name} <br />City :{order.city}<br />Country: {order.country}<br />Email: {order.email}<br />Phone No: {order.phone}</td>
                        <td>Service Price: ${order.service.price}<br />Service Name: {order.service.name}</td>
                        <td className="text-white">{order.status}</td>
                        <td><button className="btn btn-danger m-2" onClick={()=>handleDelete(order._id)}>Cancel Order</button> <br /><button className="btn btn-success" onClick={()=>handlePending(order._id)}>Approved Order</button></td>
                        </tr> 
                    </tbody>
                ))        
            }
            </Table>
        </div>
        </div>
        </div>
    );
};

export default ManageOrder;