function Deposit() {
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("");
  const [response, setResponse] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [email, setEmail] = React.useState('');


  var greeting = "Hello! Welcome to our Deposit page.";
  if (!email && ctx.currentuser) {
    setEmail(ctx.currentuser.email)
  }

  useEffect(() => {
    validateDeposit();
  }, [amount]);

  function validateDeposit() {
    if (typeof(amount) == "string") {
      setResponse("Value deposited must be numeric, barter is not accepted")
      setButtonDisabled(true);
    }
    if (amount < 0) {
      setResponse('Withdrawls are handled in another tab please deposit a positive value of currency');
      setButtonDisabled(true);
    }
    if (amount > 0) {
      setButtonDisabled(false);
      setResponse("");
    }


  }
  function handleDeposit() {
    event.preventDefault();

    fetch(`/account/update/${email}/${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          setResponse("Your balance currently equals $" + JSON.stringify(data.value.balance))
          console.log('JSON:', data);
        } catch (err) {

          console.log('err:', text);

        }
      });
  };
  function clearDeposit() {
    setAmount('')
    setEmail('')
    setResponse('Deposit accepted, balance updated')
  };
  return (
    ctx.currentuser?
    <Card
      txtcolor="black"
      header={greeting}
      body={(
        <div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" readOnly disabled id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
              <small id="emailHelp" class="form-text text-muted">{email}</small>
            </div>
            <div class="form-group">
              <label for="enter username">Enter deisered deposit amount</label>
              <input type="username" class="form-control" id="name" aria-describedby="usernameHelp" placeholder="Deposit your currency" value={amount} onChange={e => { setAmount(e.target.value) }} />
              <small id="passwordHelp" class="form-text text-danger">{response}</small>
            </div>
            <button type="submit" class="btn btn-primary" disabled={buttonDisabled} onClick={r => { handleDeposit(); clearDeposit(); window.alert("Deposit Succsessful") }}>Deposit</button>
          </form>
        </div>
      )}
    />:
    <Card
      txtcolor="black"
      header={"Please log in to perform a deposit!"}
      body={(
        <div>
        </div>
      )}
    />
  );
}