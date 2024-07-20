import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../main.css'; // Assuming you have a separate CSS file for styles

const Skills: React.FC = () => {
    return (
        <Container className="skills-container">
            <h2 className="text-center section-title">Skills</h2>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Languages</Card.Title>
                            <Card.Text>
                                Here are some programming languages I have worked with:
                            </Card.Text>
                            <ul className="skill-list">
                                <li><strong>JavaScript</strong> - Frontend and backend development</li>
                                <li><strong>TypeScript</strong> - Used mostly for frontend development</li>
                                <li><strong>React</strong> - Building interactive user interfaces</li>
                                <li><strong>React Native</strong> - Built a GitHub repository rating app</li>
                                <li><strong>Node.js</strong> - Server-side JavaScript runtime</li>
                                <li><strong>Express.js</strong> - Web application framework for Node.js</li>
                                <li><strong>Java</strong> - Object-oriented programming and Data Structures and Algorithms</li>
                                <li><strong>HTML</strong> and <strong>CSS</strong> - Building web pages</li>
                                <li><strong>MySQL</strong> - Worked with relational databases and built a Database Management System in a group setting</li>
                                <li><strong>C++</strong> - Object-oriented programming</li>
                                <li><strong>Python</strong> - My first programming language, used for simple scripts</li>
                                <li><strong>Bash</strong> - Shell scripting and automation</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tools & IDEs</Card.Title>
                            <Card.Text>
                                Here are some tools and IDEs I have used:
                            </Card.Text>
                            <ul className="skill-list">
                                <li><strong>Visual Studio</strong> - Integrated development environment</li>
                                <li><strong>IntelliJ IDEA</strong> - IDE for Java and other languages</li>
                                <li><strong>MySQL Workbench</strong> - MySQL database design and management</li>
                                <li><strong>Xcode</strong> - IDE for iOS development</li>
                                <li><strong>RStudio</strong> - IDE for R programming</li>
                                <li><strong>VMware</strong> - Virtualization software</li>
                                <li><strong>Git</strong> - Version control system</li>
                                <li><strong>Docker</strong> - Containerization platform</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Additional Skills</Card.Title>
                            <Card.Text>
                                Here are some additional skills and technologies:
                            </Card.Text>
                            <ul className="skill-list">
                                <li><strong>Apollo Client</strong> - GraphQL client for React and other frameworks</li>
                                <li><strong>GraphQL</strong> - Query language for APIs</li>
                                <li><strong>GitHub Workflows</strong> - Automating workflows with GitHub Actions</li>
                                <li><strong>CI/CD</strong> - Continuous integration and deployment practices</li>
                                <li><strong>REST APIs</strong> - Building and consuming RESTful APIs</li>
                                <li><strong>MongoDB</strong> - NoSQL database</li>
                                <li><strong>Playwright</strong> - Testing framework for web applications</li>
                                <li><strong>Vitest</strong> - Testing tool for frontend applications</li>
                                <li><strong>Jest</strong> - JavaScript testing framework</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;
