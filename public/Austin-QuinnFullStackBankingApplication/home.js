function Home() {
  return (
    <Card
      txtcolor="black"
      header="BadBank"
      body={(
        <div>
          <img src="./logo.svg" className="img-fluid" alt="Responsive image" />
          <h1>Welcome to the bank</h1>
          <p>
            I promise this bank is not a scam, give us all of your data, you may use the nav bar to move around
          </p>
        </div>
      )}
    />
  );
}
