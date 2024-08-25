import { Container, Row, Col } from 'react-bootstrap'

const AboutMe: React.FC = () => {

    return (
        <Container fluid>
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
            </Row>
        </Container>

    )
}

export default AboutMe