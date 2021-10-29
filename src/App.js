import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import NavBar from './Component/Home/NavBar/NavBar';
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
          </Switch>
      
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
