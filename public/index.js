const root = ReactDOM.createRoot(document.getElementById('root'));

function Spa() {
  return (
    <HashRouter>
      <UserContext.Provider value={{ users: [] }}>
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={Login} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/" exact component={Home} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

console.log(Spa);
root.render(
  <Spa />
);
