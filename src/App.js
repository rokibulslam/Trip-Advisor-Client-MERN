import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AddHotel from './Component/Admin/AddHotel/AddHotel';
import AdminDashBoard from './Component/Admin/AdminDashBoard/AdminDashBoard';
import ManageAllProduct from './Component/Admin/ManageAllProduct/ManageAllProduct';
import ManageOrder from './Component/Admin/ManageOrder/ManageOrder';
import UpdateService from './Component/Admin/UpdateService/UpdateService';
import DeleteService from './Component/DeleteService/DeleteService';
import Footer from './Component/Home/Footer/Footer';
import Home from './Component/Home/Home/Home';
import NavBar from './Component/Home/NavBar/NavBar';
import Notfound from './Component/Notfound/Notfound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MyOrders from './Component/User/Customer/PlaceOrder/MyOrders/MyOrders';
import PlaceOrder from './Component/User/Customer/PlaceOrder/PlaceOrder';
import SignIn from './Component/User/SignIn/SignIn';
import SignUp from './Component/User/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <NavBar></NavBar>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/admin">
              <AdminDashBoard></AdminDashBoard>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
                <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/update/:upId">
              <UpdateService></UpdateService>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageAllProduct></ManageAllProduct>
            </PrivateRoute>
            <PrivateRoute path="/addHotel">
              <AddHotel></AddHotel>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
            <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
