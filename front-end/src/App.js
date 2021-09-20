
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Page/Home';
import Dashboard from './Components/Page/Dashboard';
import AdminPosts from "./Components/AdminPosts"
import AdminUsers from "./Components/AdminUsers"

import Signin from './Components/Signin';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import NavBarAd from './Components/NavBarAd';

import EditProfile from './Components/EditProfile';
import ProductCard from './Components/ProductCard';

import PrivateRoute from './Components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser, getUsers } from './redux/action/authAction';
import { addItem, getitem } from './redux/action/itemActions';
// import { getUser } from './redux/action/adminAction';

import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';

import Products from './Components/Products';
import Layout from './Components/Layout';
import Person from './Components/Person';
import Card from './Components/Card';
function App() {

  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState(0)
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState('');
 
  const products = useSelector(state => state.itemReducer.products)
  const user = useSelector(state => state.authReducer.user)
  const users = useSelector(state => state.authReducer.users)
   console.log("users", users)
  console.log('products', products)
  // console.log('product3', products[3])
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(() => {
    getUser()
  }, [])

  // useEffect(() => {
  //   dispatch(getProfile())
  // },[])
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {
    dispatch(getitem())
  }, [])
 
  // const AddContactt =()=>{
  //   dispatch(addProfile({name , email , phone}))
  // }

  const AddProducts = () => {
    dispatch(addItem({ title, price, description, category }))
  }

  // const getProduct =(products)=> {
  //   setTitle(products.title)
  //   setPrice(products.price)
  //   setDescription(products.description)
  //   setCategory(products.category)
  //   setId(products._id)
  // }

 

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar  title = {title} setTitle = {setTitle}   user = {user}/>
        {/* <NavBarAd user = {user} /> */}


        <Switch>
          <Route path="/" exact render={() => <Home products={products}   title = {title} setTitle = {setTitle}/>} />
          <PrivateRoute path="/dashboard" render={() => <Dashboard products={products}  title = {title} setTitle = {setTitle}/>} />

          <Route path="/signin" component={Signin} />


          <Route path="/signup" component={Signup} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/product" component={Products} />

          {/* <PrivateRoute path="/profile" component={Profile} /> */}

          <Route path="/person" render={() => <Person />} />
          <Route path="/admin-posts" render={() => <AdminPosts  products = {products}/>} />
          <Route path="/admin-users" render={() => <AdminUsers  users = {users}/>} />
          {/* <Route path="/admin-users" component={AdminUsers} /> */}



          {/* <Route path="/products" render={() =>
            <div style={{ display: "flex" }}>
              {
                products.map(product => <ProductCard product={product} />)
              }

            </div>
          } /> */}
          <Route path="/add-product" render={() => <AddProduct
            title={title}
            price={price}
            description={description}
            category={category}
            setTitle={setTitle}
            setPrice={setPrice}
            AddProducts={AddProducts}

          />} />


{/* <Route path="/profile" render={() => <Profile
            title={title}
            price={price}
            description={description}
            category={category}
            setTitle={setTitle}
            setPrice={setPrice}
            AddProducts={AddProducts}

          />} /> */}

          <PrivateRoute path="/updateproduct/:id" render={(props) => <EditProduct {...props}

          />} />
           {/* <PrivateRoute  path="/profile" render={()=> 
    
    {
      <Profile person={person}  getPerson={getPerson}/>
     } /> */}


{/* <Route path="/edit-profile" render={()=> <EditProfile
    name={name}
    email={email}
    password={password}
    setName={setName}
    setEmail={setEmail}
    setPassword={setPassword}
    _id={id}
    />   } /> */}


          <Route path="/cart" component={Card} />

          {/* <Route path="/products" component={Products} /> */}

        </Switch>
        <footer className ="footer">
          copyright : 2021
        </footer>


      </BrowserRouter>
    </div>
  );
}
export default App;
