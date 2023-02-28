import React from "react";
import Card from 'react-bootstrap/Card';
import { UserContext } from "./context";
function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      
      <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>All data in store</Card.Title>
        <Card.Text>
       
      {JSON.stringify(ctx)}<br/>
        </Card.Text>
      
      </Card.Body>
    </Card>
    
      
      </>
    );
  }
export default AllData;  