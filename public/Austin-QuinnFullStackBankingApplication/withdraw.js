function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("");
  const [response, setResponse] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [email, setEmail] = React.useState('');
  
  var greeting = "Hello! Welcome to our Withdrawl page";
  if (!email && ctx.currentuser) {
    setEmail(ctx.currentuser.email)
  }

  useEffect(() => {
    validateWithdraw();
  }, [amount]);

  function validateWithdraw() {
    console.log(typeof (amount))
    if (typeof (amount) == "string") {
      setResponse("Value withdrawn must be numeric, barter is not accepted")
      setButtonDisabled(true);
    }
    if (amount < 0){
      setResponse('Withdrawls are handled in another tab please deposit a positive value of currency');
      setButtonDisabled(true);
    }
    if (amount > 0){
      setButtonDisabled(false);
      setResponse("");
    }
  };

  function handleWithdraw() {
    event.preventDefault();

    fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          console.log('JSON:', data);
          setResponse("Your balance currently equals $" + JSON.stringify(data.value.balance));
        } catch (err) {
          console.log('err:', text);
        }
      });
      clearWithdraw();
      window.alert("Withdrawl Succsessful");
  };

  function clearWithdraw() {
    setAmount('');
    setEmail('');
    setResponse('Withdrawl accepted, balance updated');
  };

  return (
    ctx.currentuser?<Card
      txtcolor="black"
      header={greeting}
      body={(
        <div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" readOnly disabled aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
              <small id="emailHelp" class="form-text text-muted">{email}</small>
            </div>
            <div class="form-group">
              <label for="enter username">Enter desired deposit amount</label>
              <input type="username" class="form-control" id="name" aria-describedby="usernameHelp" placeholder="Withdraw your currency" value={amount} onChange={e => { setAmount(e.target.value) }} />
              <small id="passwordHelp" class="form-text text-danger">{response}</small>
            </div>
            <button type="submit" class="btn btn-primary" disabled={buttonDisabled} onClick={e => handleWithdraw()}>Withdraw</button>
          </form>
        </div>
      )}
    />:
    <Card
      txtcolor="black"
      header={"Please log in to perform a withdrawl!"}
      body={(
        <div>
        </div>
      )}
    />
  );
}
