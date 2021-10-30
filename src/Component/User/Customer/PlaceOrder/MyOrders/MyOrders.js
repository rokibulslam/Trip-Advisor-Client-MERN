import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res?.json())
            .then(data=> setOrders(data))
    }, [])
    

    console.log(orders)
    return (
        <div>
            <h1>Name: {orders[0]?.name}</h1>
            {
                orders?.map(order => (
                    <div className="row" key={order._id}>
                        <div className="col-md-6">
                            <img className="img-fluid" src={order.service.img} alt="" />
                            <h4>{order.service.name}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyOrders;