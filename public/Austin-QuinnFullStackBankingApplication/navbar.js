function NavBar() {
  const ctx = React.useContext(UserContext);
  const [active, setActive] = React.useState('default');


  console.log("navbar:" + JSON.stringify(ctx))
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
                <a className="nav-link" aria-current="page" href="#/login" title="Welcome back valued customer! Manage log-in here.">Log In/Out</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/deposit" title="Deposit any and all of your money here.">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/withdraw" title="If you must, you may withdraw funds here.">Withdraw</a>
              </li>
              <li className="nav-item" disabled aria-disabled>
                <label className="nav-link">Logged in user: {''}</label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
