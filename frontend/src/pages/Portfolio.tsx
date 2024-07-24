import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BlogAppPicture from '../resources/newBlogHub.png';
import PersonalWebsitePhoto from '../resources/newPersonalWebsitePhoto.png';
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
                                <div>
                                    <p>
                                        This website that you're on right now was built by me from scratch using React.js, TypeScript, and Docker. I decided to make this frontend only as utilizing a backend for this website would not be necessary. The development process included:
                                    </p>
                                    <ul>
                                        <li>Utilizing TypeScript and React for robust and maintainable code.</li>
                                        <li>Employing Docker for containerization, ensuring consistency across different environments.</li>
                                        <li>Integrating React-Bootstrap and Material-UI for a responsive and modern design.</li>
                                        <li>Setting up GitHub Workflows for continuous integration and deployment, ensuring seamless updates and maintenance.</li>
                                    </ul>
                                    <p>
                                        This project helped me enhance my skills in modern web development tools and frameworks, responsive design, and user experience.
                                    </p>
                                </div>
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
                                <div>
                                    <p>
                                        I made a blog app using React.js, JavaScript, Node.js, Redux, Docker, and more. This is my most comprehensive project to date, as it taught me many technologies and frameworks along the way. The app includes:
                                    </p>
                                    <ul>
                                        <li>End-to-end testing with Playwright to ensure application reliability.</li>
                                        <li>Deployment on Fly.io for scalable and efficient hosting.</li>
                                        <li>Continuous integration and deployment using GitHub Workflows.</li>
                                        <li>Containerized frontend and backend for consistent and isolated environments.</li>
                                    </ul>
                                    <p>
                                        Through this project, I gained significant experience in full-stack development, including front-end and back-end technologies, testing, and deployment.
                                    </p>
                                </div>
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
                                <div>
                                    <p>
                                        My other projects include:
                                    </p>
                                    <ul>
                                        <li>Building an iOS app using React Native as part of the Full Stack Open React Native course, enhancing my mobile development skills.</li>
                                        <li>Developing a Tower of Hanoi game in Java with a user interface, demonstrating my ability to create interactive applications.</li>
                                        <li>Completing several school projects where I learned data structures and algorithms using Java, gaining a deep understanding of these fundamental concepts.</li>
                                        <li>Creating a maze game using Bash scripting, showcasing my proficiency in shell scripting and automation.</li>
                                    </ul>
                                    <p>
                                        Clicking this link will direct you to my GitHub where all my projects are hosted. These projects improved my problem-solving skills and ability to work on a variety of technologies.
                                    </p>
                                </div>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;
