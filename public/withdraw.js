import React, { useEffect } from "react";
import { UserContext } from "./context";
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Deposit(){
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw]         = React.useState("");
  const [response ,setResponse]= React.useState('');
  const [buttonDisabled, setButtonDisabled]         = React.useState(true);
  const [email, setEmail] = React.useState('');
  var balance = 0 ;
  var username = '';

  function validateWithdraw (){
    console.log(typeof(withdraw))
    if (typeof(withdraw) == "string"){
      setResponse("Value deposited must be numeric, barter is not accepted")
      setButtonDisabled(true);
    }
    if (withdraw < 0){
      setResponse('Withdrawls are handled in another tab please deposit a positive value of currency');
      setButtonDisabled(true);
    }
    if (withdraw > 0){
      setButtonDisabled(false);
      setResponse("");
    }
  };
  

  function handleDeposit(){
    fetch('/account/update/${email}/${deposit}')
    .then( response => response.text())
    .then(text =>{
      try {
        const data = JSON.parse(text);
        setResponse(JSON.stringify(data.value))
        console.log('JSON:', data);
    } catch(err) {
        
        console.log('err:', text);
    
    }});
  };
  function clearDeposit(){
    setWithdraw('')
    setEmail('')
    setResponse('Deposit accepted, balance updated')
  };
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Img variant="top" src="/bank.png" />
        <Card.Text>
        <Form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => {setEmail(e.target.value)}}/>
            <small id="emailHelp" class="form-text text-muted">{emailstatus}</small>
          </div>
          <div class="form-group">
            <label for="enter username">Enter deisered deposit amount</label>
            <input type="username" class="form-control" id="name" aria-describedby="usernameHelp" placeholder="Deposit your currency"value={deposit} onChange={e => {setDeposit(e.target.value)}}/>
            <small id="passwordHelp" class="form-text text-danger">{response}</small>
          </div>
                            
          <Button type="submit" class="btn btn-primary" disabled={buttonDisabled} onClick={r=>{handleDeposit(); clearDeposit(); window.alert("Deposit Succsessful")}}>Deposit</Button> 
        </Form>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
    )
  }
export default Deposit;