import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [deletes, setDelete] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deletes])
    console.log(orders)

    const handlePending = (id) => {
        axios.put(`http://localhost:5000/updateStatus/${id}`, {status: "Approved"})
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Approved Order')
                }
            })
            .then(data => setDelete(data) )
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure? You are going to cancel your order')

        if (confirm) {
            axios.delete(`http://localhost:5000/delete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Your Order Has Canceled")
                    }
                })
                .then(data => setDelete(data))
        }
    }
    return (
        <div>
            <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Ordered BY</th>
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
                        <td>${order.service.price}<br />{order.service.name}</td>
                        <td className="text-danger">{order.status}</td>
                        <td></td>
                        
                        <td><button onClick={()=>handleDelete(order._id)}>Cancel Order</button> <br /><button onClick={()=>handlePending(order._id)}>Approved Order</button></td>
                        </tr> 
                    </tbody>
                ))        
            }
            </Table>
        </div>
        </div>
    );
};

export default ManageOrder;