
import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout} from "../redux/action/authAction";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

const NavBar = ({setTitle}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
            Auth App
          </Link>
        )}
      />
      <span style={{display:"flex"}}>
     <input type="text" placeholder="Search" 
     onChange={(e)=>setTitle(e.target.value)}/>
   
 </span>
      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
            <NavItem className="p-2">
              <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/profile">Profile</Link>
              </Button>
            </NavItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <Signin/>
            </NavItem>
            <NavItem className="p-2">
              <Signup />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;