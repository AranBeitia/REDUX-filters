import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span>Redux filters</span>
          </Navbar.Brand>
        </Link>
        <span className="text-light">{title}</span>
      </Container>
    </Navbar>
  )
}

export default Header
