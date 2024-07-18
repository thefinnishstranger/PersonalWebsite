import { Container, Row, Col } from "react-bootstrap"

const Basketball: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h4>Childhood</h4>
                </Col>
                <Col md={4}>
                    <h4>High School</h4>
                </Col>
                <Col md={4}>
                    <h4>Collegiate career</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Basketball