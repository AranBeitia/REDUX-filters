import { Navbar, Container } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Redux filters
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
