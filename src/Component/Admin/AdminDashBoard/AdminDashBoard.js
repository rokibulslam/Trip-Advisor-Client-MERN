import React from 'react';
import AddHotel from '../AddHotel/AddHotel';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageOrder from '../ManageOrder/ManageOrder';

const AdminDashBoard = () => {
    return (
        <div>
            <ManageOrder></ManageOrder>
            <AddHotel></AddHotel>
            <ManageAllProduct></ManageAllProduct>
            
        </div>
    );
};

export default AdminDashBoard;