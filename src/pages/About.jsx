import selfie from '../assets/selfie.jpg'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container>
            <Row>
                <Col xs={12} md ={12} lg={12}>
                    <Image src={selfie} id='selfie'/>
                </Col>
                <Col xs={12} md={12} lg={12}>
                    <p id='aboutMe'>Hello! My name is Christopher Stasney. Through UCF's coding bootcamp I have been able to start my journey as a full stack web developer.
                        Through this bootcamp I have learned to use many technologies and languages inlucing MERN stack and MYSQL. I am an avid traveler and nature enthusiast.
                        In my free time I enjoy SCUBA, climbing, hiking, drifting "crazy carts", and video games.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;