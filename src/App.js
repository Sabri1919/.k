import './App.css';
import { Button,Form, Nav,Navbar,NavDropdown,FormControl } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Believe in yourself</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Strength</Nav.Link>
      <Nav.Link href="#link">Faith</Nav.Link>
      <NavDropdown title="Show me" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">No pain no gain</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Recognise your ability to accomplish goals.</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Be optimistic.</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"> you can do anything.</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">GO !</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<img src="https://sial.school/wp-content/uploads/2018/12/believing-in-yourself-is-the-secret-to-success.jpg" 
alt="Contact us"
height="500" width="1000" />
    </div>
  );
}

export default App;