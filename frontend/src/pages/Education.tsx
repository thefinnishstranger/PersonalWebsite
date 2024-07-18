import { Container, Row, Col } from "react-bootstrap"


const Education: React.FC = () => {
    return (
        <Container>
            <Row>
                <h1>My academia journey</h1>
                <Col md={4}>
                    <h4>Eastern Wyoming College</h4>
                </Col>
                <Col md={4}>
                    <h4>University of North Alabama</h4>
                </Col>
                <Col md={4}>
                    <h4>University of Texas at Tyler</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Education