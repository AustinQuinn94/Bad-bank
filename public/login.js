const { event } = require("jquery");

function Login() {
  const ctx = React.useContext(UserContext);
  const [compareemail, setCompareEmail] = React.useState('');
  const [comparepassword, setComparePassword] = React.useState('');
  const [response, setResponse] = React.useState('');

  function verification() {
    event.preventDefault();

    fetch(`/account/login/${compareemail}/${comparepassword}`)
      .then(response => response.text())
      .then(text => {
          try {
            const data = JSON.parse(text);
            if (typeof data.success !== "undefined" && data.success === false) {
              setResponse("Unsuccessful login, please try again");
            } else {
              ctx.currentuser = {
                email: compareemail,
                name: data.name,
                balance: data.balance
              }
              setResponse("Welcome to Bad Bank, " + data.name + "!")
              console.log('JSON:', data);
            }
          } catch (err) {
            console.log(err)
            setResponse("Unsuccessful login, please try again")
            console.log('err:', text);
  
          }
        });
    setCompareEmail('');
    setComparePassword('');
  }
  function logout() {
    event.preventDefault();
    ctx.currentuser = undefined;
    setResponse("Logged out!");
  }


  return (
    <Card
      txtcolor="black"
      header="Login"
      body={!ctx.currentuser?(
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
      ):<div>
      <form>
        <label>Welcome! You are currently logged in!</label>

        <button type="submit" class="btn btn-primary" onClick={e => logout()}>Log Out</button>
      </form>
    </div>} />
  )
}