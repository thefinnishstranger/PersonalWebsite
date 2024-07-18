import { Container, Row, Col } from "react-bootstrap"

const Portfolio: React.FC = () => {
    return (
        <Row>
            <h1>My portfolio</h1>
            <Col md={4} className="text-center">
            <h3>My personal website</h3>
            <p>
                This website that you're on right now was built by me from scratch by using React.js, Typescript, and Docker. I decided to make this frontend only as utilizing a backend for this website would not be necessary
            </p>
            </Col>
            <Col md={4} className="text-center">
            <h3>Blog app</h3>
            <p>
                I made a blog app using React.js, Javascript, Node.js, Docker, and (...). This is my biggest app that I've created as it taught me many technologies and frameworks along the way. The app has playwright tests, which I enjoy using and also github workflow for continuous integration. I have also containarized both the frontend and the backend.
            </p>
            </Col>
            <Col md={4} className="text-center">
            <h3>Other small projects: </h3>
            <p>
                My other projects include java programs, which majority focus on data structures and algorithms.
            </p>
            </Col>
        </Row>
    )
}

export default Portfolio