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
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res?.json())
            .then(data=> setOrders(data))
    }, [deletes])
    
    const handleDelete = (id) => {
         axios.delete(`http://localhost:5000/delete/${id}`)
             .then(res => {
                 if (res.data.deletedCount) {
                     alert("New Order Successfully Placed for Approving")
                 }
             })
             .then(data=> setDelete(data))
    }
    console.log(orders)
    return (
        <div>
            <h1>Name: {orders[0]?.name}</h1>
            
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
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
                        <td>{order.name}</td>
                        <td>{order.city}<br />{order.country}<br />{order.email}<br />{order.phone}</td>
                        <td className="text-danger">{order.status}</td>
                        <td>${order.service.price}<br />{order.service.name}</td>
                        <td><button onClick={()=>handleDelete(order._id)}>Cancel Order</button></td>
                        </tr> 
                    </tbody>
                ))        
            }
            </Table>
        </div>
    );
};

export default MyOrders;