import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="text-center" style={{height:1000}}>
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
