import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header> BadBank</Card.Header>
      <Card.Img variant="top" src="/bank.png" />
      <Card.Body>
        <Card.Title>Welcome to the bank</Card.Title>
        <Card.Text>
          I promise this bank is not a scam, give us all of your data, you may use the nav bar to move around
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}; 

  export default Home