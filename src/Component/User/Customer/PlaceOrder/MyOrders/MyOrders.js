import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../../Hooks/useAuth';



const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deletes, setDelete] = useState('')
    useEffect(() => {
        fetch(`https://frightening-cat-78341.herokuapp.com/orders/${user?.email}`)
            .then(res => res?.json())
            .then(data=> setOrders(data))
    }, [deletes])
    
    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure? You are going to cancel your order')

        if (confirm) {
             axios.delete(`https://frightening-cat-78341.herokuapp.com/delete/${id}`)
                 .then(res => {
                     if (res.data.deletedCount) {
                         alert("Your Order Has Canceled")
                         window.location.reload()
                     }
                 })
                 .then(data => setDelete(data))
         }
    }
    console.log(orders)
    return (
        <div className="my-5">
            <h1 className="fw-normal p-2">My Orders</h1>
            {orders.length ?
                <div className="container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Adress</th>
                                <th>Status</th>
                                <th>Product</th>
                            </tr>
                        </thead>
                        {
                            orders?.map(order => (
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{order.name} <br />{order.city}<br />{order.country}<br />{order.email}<br />{order.phone}</td>
                                        {order.status === 'Approved' ? <td className="text-primary">{order.status}</td>:<td className="text-danger">{order.status}</td>}
                                        <td>${order.service.price}<br />{order.service.name}</td>
                                        <td><button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Cancel Order</button></td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </Table>
                </div> : <h1>You have 0 Orders</h1>}
        </div>
    );
};

export default MyOrders;