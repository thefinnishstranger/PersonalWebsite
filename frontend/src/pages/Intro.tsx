import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profilePicture from '../resources/nikPhoto2.png'
import '../intro.css';

const Intro: React.FC = () => {
    return (
        <Container className="intro-container" fluid>
            <Row className="justify-content-center align-items-center text-center full-height">
            <Col md={4}>
                    <Image src={profilePicture} alt="Nikolas Gustavson" className="profile-picture" />
                </Col>
                <Col md={8}>
                    <p className="intro-text">
                        Hello, I am a Full Stack Web Developer <i className="wave-emoji">👋</i>
                    </p>
                    <Link to='/contact'><button className="connect-button">Let's Connect</button></Link>
                    <div>
                        <p className="tech-stack">
                            My tech stack:
                        </p>
                        <i className="devicon-javascript-plain colored tech-logo"></i>
                        <i className="devicon-typescript-plain colored tech-logo"></i>
                        <i className="devicon-html5-plain colored tech-logo"></i>
                        <i className="devicon-css3-plain colored tech-logo"></i>
                        <i className="devicon-react-original colored tech-logo"></i>
                        <i className="devicon-reactbootstrap-original colored tech-logo"></i>
                        <i className="devicon-mongodb-plain colored tech-logo"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Intro;