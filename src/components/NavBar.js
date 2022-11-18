import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavBar() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://github.com/codetombomb/tom-portfolio/blob/master/public/assets/logos/tom-logo-300px.png?raw=true"
              style={{width: "15%"}}
            ></img>
          </Navbar.Brand>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Container>
          <Navbar.Brand href="#home" placement="end" style={{width: "7%"}}>
            <img
              src="https://avatars.githubusercontent.com/u/56778984?v=4"
              style={{width: "50%", borderRadius: "40px"}}
            ></img>
          </Navbar.Brand>
      </Navbar>
    </>
  );
}
export default NavBar;
