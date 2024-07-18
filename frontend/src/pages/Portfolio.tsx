import { Container, Row, Col, Image } from "react-bootstrap"
import BlogAppPicture from '../resources/BlogAppPicture.png'
import PersonalWebsitePhoto from '../resources/PersonalWebsitePhoto.png'

const blogAppUrl = 'https://bloglistappnikolasfrontend.fly.dev'

const Portfolio: React.FC = () => {
    return (
        <Container>
            <Row>
                <h1>My portfolio</h1>
                <Col md={4} className="text-center">
                    <h3>My personal website</h3>
                    <a href='/' target="_blank" rel="noopener noreferrer">
                    <Image src={PersonalWebsitePhoto} alt='personal website' rounded fluid />
                    </a>
                    <p>
                        This website that you're on right now was built by me from scratch by using React.js, Typescript, and Docker. I decided to make this frontend only as utilizing a backend for this website would not be necessary
                    </p>
                </Col>
                <Col md={4} className="text-center">
                <h3>Blog app</h3>
                <a href={blogAppUrl} target="_blank" rel="noopener noreferrer">
                    <Image src={BlogAppPicture} alt='blog app' rounded fluid />
                </a>
                <p>
                    I made a blog app using React.js, Javascript, Node.js, Redux, Docker, and (...). This is my biggest app that I've created as it taught me many technologies and frameworks along the way. The app has playwright tests, which I enjoy using and also github workflow for continuous integration. I have also containarized both the frontend and the backend.
                </p>
                </Col>
                <Col md={4} className="text-center">
                <h3>Other small projects: </h3>
                <p>
                    My other projects include java programs, which majority focus on data structures and algorithms.
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio