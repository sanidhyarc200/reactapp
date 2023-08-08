import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand  style={{width : "25%"}} href="#">MyShoppingCart</Navbar.Brand>
    <Navbar.Toggle  style={{width : "25%"}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Form inline><FormControl type="text" placeholder="Search" className="mr-sm-2" /><Button variant="outline-success">Search</Button></Form>
      </Nav>
      <Nav><Dropdown  alignRight><Dropdown.Toggle  style={{width : "25%"}}variant="link" id="cart-dropdown"><i className="fas fa-shopping-cart"></i></Dropdown.Toggle><Dropdown.Menu><Dropdown.Item href="#action1">Item 1</Dropdown.Item><Dropdown.Item href="#action2">Item 2</Dropdown.Item><Dropdown.Item href="#action3">Item 3</Dropdown.Item></Dropdown.Menu></Dropdown></Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;