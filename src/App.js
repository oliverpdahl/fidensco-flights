import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from './fidensoLogo.png'
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
      </Navbar>
      <div className="m-4">
      <Jumbotron>
        <Container>
          <h1>fidenso - flights</h1>
          <p>
            Offset your emissions from flying
          </p>
        </Container>
      </Jumbotron>
      <Button variant="info" size="lg" block className=''>OFFSET</Button>
      </div>
    </div>
  );
}

export default App;
