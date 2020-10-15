import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from './fidensoLogo.png'
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'
// import Nav from 'react-bootstrap/Nav'
function App() {
  return (
    <div className="text-center" style={{height:1000}}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
      <div className="m-4">
      <Jumbotron>
        <Container>
          <h1>fidenso//flights</h1>
          <p>
            Offset your emissions from flying
          </p>
        </Container>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To</th>
            <th>From</th>
            <th>Carbon</th>
            <th>Offset</th>
          </tr>
        </thead>
        <tbody>
          <TableRow id="1" to="LAX" from="MNL" carbon="1248"/>
          <TableRow id="2" to="DCA" from="EDI" carbon="519"/>
          <TableRow id="3" to="ONT" from="STL" carbon="259"/>
        </tbody>
      </Table>
      <Button variant="success" size="lg" block className=''>OFFSET ALL FLIGHTS</Button>
      </div>
    </div>
  );
}

export default App;
