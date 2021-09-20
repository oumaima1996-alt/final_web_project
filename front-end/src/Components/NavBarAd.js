import React, {useState, Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login, logout} from "../redux/action/authAction";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import AdminPage from './AdminPage';
const NavBarAd = ({user}) => {
    console.log("userAdmin", user)
    const dispatch =  useDispatch()
    const isAuth = useSelector((state) => state.authReducer.isAuth);
     var userArray = user && Object.keys(user)
     console.log("isAdmin", userArray && userArray.includes('isAdmin'))
    return (
        <div className="nav-mnu">
            {userArray && userArray.includes('isAdmin') ? (<AdminPage />): isAuth ? (
                <nav className="nav-user">
                    <button className="btn-nav">
                        <Link to="/" className="linl-nav">Home</Link>
                    </button>
                    <button className="btn-nav" onClick={()=>{dispatch(logout())
                    window.location.reload()}}>Log out</button>
                    <button className="btn-nav">
                        <Link to="/dashboard" className="link-nav">Dashboard</Link>
                    </button>
                    <button className="btn-nav">
                        <Link to="/person" className="link-nav other-color">Profile</Link>
                    </button>
                </nav>
            ):(<nav className="nav-user">
                <Signin />
                <Signup />

            </nav>)}



            
        </div>
    )
}

export default NavBarAd
