
import React, {useState, Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout} from "../redux/action/authAction";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Search from "../Components/Search";
import NavBarAd from "../Components/NavBarAd";
import AdminPage from './AdminPage';

const NavBar = ({title, setTitle, user}) => {
  const dispatch = useDispatch();
  // const [title,setTitle] = useState("")
  console.log('title', title)
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  var userArray = user && Object.keys(user)

  const history = useHistory();
  const onSubmit = (e) => {
      history.push({title});
      e.preventDefault();
  };
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
     
     <input type="text" placeholder="search"  value = {title}
     onChange={(e)=>setTitle(e.target.value)}/>
     <button className="btn-search" >Search</button>
 
      <Nav className="text-white">
        { userArray && userArray.includes('isAdmin') ? (<AdminPage />):isAuth ? (
          <Fragment>
            <NavItem className="p-2">
              <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/dashboard">Dashboard</Link>
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