import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function portfolioNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navBar" variant="pills" defaultactivekey="/home">
            <Container>
                <Navbar.Brand href="#home">Chris Stasney</Navbar.Brand>
                    <Nav className="me-auto" variant="pills" defaultactivekey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to ="/">About me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to ='/portfolio' eventKey="link-1">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to ='/contact' eventKey="link-1">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to ='/resume' eventKey="link-1">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default portfolioNav;

