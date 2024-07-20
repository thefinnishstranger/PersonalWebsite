import { Container, Row, Col, Card } from "react-bootstrap";
import BlogAppPicture from '../resources/BlogAppPicture.png';
import PersonalWebsitePhoto from '../resources/PersonalWebsitePhoto.png';
import '../main.css';

const blogAppUrl = 'https://bloglistappnikolasfrontend.fly.dev';

const Portfolio: React.FC = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1 className="text-center section-title">My Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-4">
                    <Card className="h-100 portfolio-frame">
                        <a href='/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                            <Card.Img variant="top" src={PersonalWebsitePhoto} alt='personal website' />
                        <Card.Body>
                            <Card.Title>My Personal Website</Card.Title>
                            <Card.Text>
                                This website that you're on right now was built by me from scratch using React.js, Typescript, and Docker. I decided to make this frontend only as utilizing a backend for this website would not be necessary.
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100 portfolio-frame">
                        <a href={blogAppUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                            <Card.Img variant="top" src={BlogAppPicture} alt='blog app' />
                        <Card.Body>
                            <Card.Title>Blog App</Card.Title>
                            <Card.Text>
                                I made a blog app using React.js, Javascript, Node.js, Redux, Docker, and more. This is my biggest app that I've created as it taught me many technologies and frameworks along the way. The app has playwright tests and also GitHub workflow for continuous integration. Both the frontend and backend are containerized.
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>
                </Col>
                </Row>
                <Row>
                <Col md={6} className="mb-4">
                    <Card className="h-100 portfolio-frame">
                        <a href='https://github.com/thefinnishstranger' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}> 
                        <Card.Body>
                            <Card.Title>Other Small Projects</Card.Title>
                            <Card.Text>
                                My other projects include Java programs, which mainly focus on data structures and algorithms. Clicking this will direct you to my GitHub where I got all my projects!
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
