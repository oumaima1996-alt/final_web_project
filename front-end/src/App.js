
import React, { useEffect, useState } from 'react';
import {BrowserRouter ,  Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Page/Home';
import Dashboard from './Components/Page/Dashboard';

import Signin from './Components/Signin';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';

import PrivateRoute from './Components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from './redux/action/authAction';
import Products from './Components/Products';
import Layout from './Components/Layout';
import Profile from './Components/Profile';
import Card from './Components/Card';
function App() {
 

  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(() => {
    getUser()
  },[])

  return (
    <div className="App">
     
    <BrowserRouter>
    <NavBar/>

    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Card} />

        {/* <Route path="/products" component={Products} /> */}

      </Switch>
      <footer>
      copyright : 2021
      </footer>
      

    </BrowserRouter>
    </div>
  );
}
export default App;
