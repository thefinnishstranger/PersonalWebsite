import { Container, Row, Col } from "react-bootstrap"

const Skills: React.FC = () => {
    return (
        <Container>
            <Row>
                <h1>My skills:</h1>
                <Col md={4}>
                    <h4>
                        My frontend skills:
                    </h4>
                </Col>
                <Col md={4}>
                    <h4>
                        My backend skills:
                    </h4>
                </Col>
                <Col md={4}>
                    <h4>
                        Other skills:
                    </h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills