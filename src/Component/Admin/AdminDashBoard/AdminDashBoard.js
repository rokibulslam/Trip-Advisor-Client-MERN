import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AddHotel from '../AddHotel/AddHotel';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageOrder from '../ManageOrder/ManageOrder';

const AdminDashBoard = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <Nav.Link className="fs-3" as={HashLink}  to="/allOrders">Manage All Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="fs-3" as={HashLink} to="/manageProducts">Manage All Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="fs-3" as={HashLink} to="/addHotel">Add a new Service</Nav.Link>
            </Nav.Item>
             </Nav>
            <ManageOrder></ManageOrder>
            <AddHotel></AddHotel>
            <ManageAllProduct></ManageAllProduct>
            
        </div>
    );
};

export default AdminDashBoard;