import './App.css';
import Description from "./components/Description";
import Price from "./components/Price";
import Name from "./components/Name"
import Image from "./components/Image"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from "./product";
import { Container, Nav, Navbar } from "react-bootstrap";
import { First } from 'react-bootstrap/esm/PageItem';
function App() {
  let firstName = "karima";
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.url} />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Card.Text>
              <Price />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </main>
      {firstName ? (
        <div>
          <h1> Hello {firstName} </h1>
          <img src="data:image/jpeg;base64,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" alt='' width= "300px" />
        </div>
      ) : (
        <h1>Hello There</h1>
      )}
    </div>
  );
    }
  export default App;

