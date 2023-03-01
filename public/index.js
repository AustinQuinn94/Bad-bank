const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Test 1");

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [] }}>
        <div className="container" style={{ padding: "20px" }}>

          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={Login} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/balance" component={Balance} />
          <Route path="/alldata" component={AllData} />
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
