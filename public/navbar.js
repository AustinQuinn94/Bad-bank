function NavBar() {

  const [active, setActive] = React.useState('default');

  const ctx = React.useContext(UserContext);
  var currentUser = 'nobody';
  if (ctx != null && ctx.currentuser != null) {
      currentUser = ctx.email
      
  }

console.log(ctx)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" aria-activedescendant={active}>
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
            <img src="logo.svg" width="100" height="100"></img>
          </a>
          <button className="navbar-toggler m1-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m1-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/" title="Welcome to our bank">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/createaccount" title="Sign up for an acount with us here. You are safe with us!">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/login" title="Welcome back valued customer! log in here.">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/deposit" title="Deposit any and all of your money here.">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/withdraw" title="If you must, you may withdraw funds here.">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/balance" title="Check your balance here, we promise its all there.">Balance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/alldata" title="View the data of all our loyal costomers here! Wait this wasnt supposed to be public, oh well.">All Data</a>
              </li>
              <li className="nav-item" disabled aria-disabled>
                <label className="nav-link">Logged in user: {currentUser}</label>
              </li>
            </ul>
            <ul classname = "nav navbar-collapse navbar-right m1-auto">
              <li className="nav-item">
                <label className="nav-link">Logged in user: {currentUser}</label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
