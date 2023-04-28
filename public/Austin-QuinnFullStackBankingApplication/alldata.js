function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header="All data in store"
      body={(
        <div>
          {JSON.stringify(ctx)}
        </div>
      )} />
  );
}
