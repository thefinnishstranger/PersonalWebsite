import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profilePicture from '../resources/nikPhoto.jpeg'
import '../intro.css';

const Intro: React.FC = () => {

    return (
        <Container>
            <Row className="justify-content-center align-items-center text-center">
                <Col md={8}>
                    <p>
                        Hello, I am a Full Stack Web Developer
                    </p>
                    <Link to='/contact'><button>Let's Connect</button></Link>
                </Col>
                <Col>
                    <Image src={profilePicture} alt="Nikolas Gustavson" roundedCircle className="profile-picture" />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center text-center">
                <Col>
                    <p>
                        My tech stack                        
                    </p>
                    <div>
                        <p>
                            JavaScript,
                            TypeScript,
                            HTML,
                            CSS,
                            React Bootstrap,
                            MongoDB,
                            TailWind
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default Intro;
