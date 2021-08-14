import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Page/Home'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

function ProApp(props) {
  return (
    <div className="App">
      <NavBar />
    
        

    </div>
  );
}

export default ProApp;
