import React, {useState} from 'react'
import NavBar from '../NavBar'
import Modal from './Modal'
import AddProduct from '../AddProduct'
import ProductList from '../ProductList'

import {Row, Container, Col} from "react-bootstrap"
import '../../App.css'
import {initialData} from '../InitialData';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
import ProductCard from '../ProductCard'

function Dashboard({title, setTitle}) {
  const [product, setProduct] = useState(initialData)

  const addMv = (e , newproduct)=> {
    e.preventDefault() ;
    return setProduct([...product, newproduct]) 
  }

  
    
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
              <NavLink exact to="/category" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Category</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/products" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Product</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink>
  
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

        <AddProduct addMv={addMv}/>
       
       <ProductList product = {product}  title = {title} setTitle={setTitle}/>
       
      </div>
        
           

              
           
            
       
    )
}

export default Dashboard
