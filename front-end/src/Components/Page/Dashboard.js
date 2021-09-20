import React, {useState} from 'react'
import NavBar from '../NavBar'
import Modal from './Modal'
import AddProduct from '../AddProduct'
import ProductListD from '../ProductListD'
import {Link} from "react-router-dom"
import {Row, Container, Col} from "react-bootstrap"
import '../../App.css'
import { useSelector } from 'react-redux'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';

function Dashboard({title, setTitle, products}) {
  // const [product, setProduct] = useState(initialData)

  // const addMv = (e , newproduct)=> {
  //   e.preventDefault() ;
  //   return setProduct([...product, newproduct]) 
  // }
  const user = useSelector(state => state.authReducer.user)

  
    
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        
      >
      
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/product" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Product</CDBSidebarMenuItem>
              </NavLink>

              <NavLink  to="/person" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink> */}
  
              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  404 page
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        {/* <AddProduct /> */}
        {/* <div className="App"> */}
      {/* <Link to ="/contact-list">
    <button> Contact list </button>
    </Link> */}
    {/* <Link to ="/add-product">
    <button> add Product</button>
    </Link> */}
       
       <ProductListD   title = {title} products = {products} user = {user}/>

      </div>
        
           

              
           
            
       
    )
}

export default Dashboard
