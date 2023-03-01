function Balance() {
  const ctx = React.useContext(UserContext);
  var balance = 0
  var username = ''
  if (ctx.currentuser != null) {
    balance = ctx.users[ctx.currentuser].balance
    username = ctx.users[ctx.currentuser].name

  }
  const evaluation = ("Your balance is currently $" + balance)
  const greeting = ("Welcome " + username)
  return (
    <Card
      txtcolor="black"
      header="BadBank Balance Evaluation"
      body={(
        <div>
          <h1>{greeting}</h1>
          {evaluation}
        </div>
      )}
    />
  )
}