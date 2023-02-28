import React from "react";
import Card from 'react-bootstrap/Card';
import { UserContext } from "./context";


function Balance(){
  const ctx = React.useContext(UserContext);
  var balance = 0 
  var username = ''
  if (ctx.currentuser != null){
    balance = ctx.users[ctx.currentuser].balance
    username = ctx.users[ctx.currentuser].name

  }
  const Evaluation = ("Your balance is currently $" + balance) 
  const greeting = ("Welcome " + username)
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Header> BadBank Balance Evaluation</Card.Header>
      <Card.Img variant="top" src="/bank.png" />
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>
          {Evaluation}
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
  }
  export default Balance;