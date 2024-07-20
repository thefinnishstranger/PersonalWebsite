import { Container, Row, Col, Image } from "react-bootstrap";
import profilePicture from '../resources/nikPhoto.jpeg';
import basketballPhoto from '../resources/basketballPhoto.jpeg';
import basketballPhoto1 from '../resources/basketballPhoto1.jpeg';
import '../intro.css';

const Intro: React.FC = () => {
    return (
        <Container fluid className="intro-container">
            <Row className="justify-content-center align-items-center text-center text-light intro-header">
                <Col md={6} className="mb-4">
                    <Image src={profilePicture} alt="Nikolas Gustavson" roundedCircle className="profile-picture" />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h1 className="intro-title">Welcome to My World!</h1>
                    <p className="intro-container-text">
                        Hi, I'm Nikolas Gustavson, a student-athlete at the University of Texas at Tyler, majoring in Computer Science. I compete at the NCAA Division 2 level and aim to become a Full Stack Engineer. I’m excited about diving into the tech industry post-graduation.
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12} className="text-center">
                    <h2 className="intro-subtitle">About Me</h2>
                    <p className="intro-text">
                        I hail from Helsinki, Finland, and my passion for basketball led me to the U.S. I began my collegiate journey at Eastern Wyoming College and later transferred to the University of North Alabama, and now, the University of Texas at Tyler.
                    </p>
                    <p className="intro-text">
                        After earning my Associate's Degree and discovering my passion for Computer Science, I am now set to graduate with my Bachelor's degree next year. My journey has included working with Java, C++, and more recently, React and Node.js.
                    </p>
                    <p className="intro-text">
                        I'm always eager to learn and embrace new technologies. I look forward to making impactful contributions in the software engineering field.
                    </p>
                </Col>
                <Col md={12} className="d-flex justify-content-center mt-4">
                    <Image src={basketballPhoto} alt="Nikolas playing basketball" rounded className="basketball-photo mx-2" />
                    <Image src={basketballPhoto1} alt="Nikolas shooting a basketball" rounded className="basketball-photo mx-2" />
                </Col>
            </Row>
        </Container>
    );
}

export default Intro;
