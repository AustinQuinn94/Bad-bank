
function Login() {
  const ctx = React.useContext(UserContext);
  const [compareemail, setCompareEmail] = React.useState('');
  const [comparepassword, setComparePassword] = React.useState('');
  const [response, setResponse] = React.useState('');

  function verification() {
    event.preventDefault();

    fetch(`/account/login/${compareemail}/${comparepassword}`)
      .then(response => response.text())
    ctx.currentuser.email = compareemail
      // for (var i = 0; i < ctx.users.length; i++) {
    //   if (ctx.users[i].name === compareemail && ctx.users[i].password === comparepassword) {
    //     ctx.currentuser = { "name": "INSERT NAME", "email": compareemail };
    setResponse("Welcome to Bad Bank, " + ctx.users[i].name + "your balance currently is");
    //     console.info("Logged in");
    //     return;
    //   }
    // }
    setResponse("Please try again, username password combination not found");
  }


  return (
    <Card
      txtcolor="black"
      header="Login"
      body={(
        <div>
          <form>
            <div class="form-group">
              <label for="enter email">Enter Email</label>
              <input type="username" class="form-control" id="name" aria-describedby="usernameHelp" placeholder="Enter email address" value={compareemail} onChange={e => { setCompareEmail(e.target.value) }} />

            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={comparepassword} onChange={e => { setComparePassword(e.target.value) }} />
              <small id="passwordHelp" class="form-text text-danger">{response}</small>
            </div>
            <button type="submit" class="btn btn-primary" onClick={e => verification()}>Log in</button>
          </form>
        </div>
      )} />
  )
}