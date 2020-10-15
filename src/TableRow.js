import React from 'react';  
import Button from 'react-bootstrap/Button';
  
class TableRow extends React.Component 
{ 
  render(){    
  return(
  <tr>
    <td>{this.props.to}</td>
    <td>{this.props.from}</td>
    <td>{this.props.carbon}</td>
    <td><Button variant="success" block>Offset Flight</Button></td>
  </tr>)
  }
} 
  
export default TableRow; 