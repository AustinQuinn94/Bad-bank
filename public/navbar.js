import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  
  const [active, setActive] = React.useState('default');
 
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
            <Nav.Link href="#/" data-toggle="popover" title='Welcome to our bank' data-trigger='hover'  >Home</Nav.Link>
            <Nav.Link href="#/createaccount" data-toggle='popover' title='Sign up for an acount with us here. You are safe with us!' data-trigger='hover'>Create Account</Nav.Link>
            <Nav.Link href="#/login" data-toggle="popover" title="Welcome back valued customer! log in here." data-trigger='hover'>Log in</Nav.Link>
            <Nav.Link href="#/deposit"data-toggle="popover" title="Deposit any and all of your money here." data-trigger='hover'>Deposit</Nav.Link>
            <Nav.Link href="#/withdraw"data-toggle="popover" title="If you must, you may withdraw funds here." data-trigger='hover'>Withraw</Nav.Link>
            <Nav.Link href="#/balance"data-toggle="popover" title="Check your balance here, we promise its all there." data-trigger='hover'>Balance</Nav.Link>
            <Nav.Link href="#/alldata"data-toggle="popover" title="View the data of all our loyal costomers here! Wait this wasnt supposed to be public, oh well." data-trigger='hover'>All Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  export default NavBar;