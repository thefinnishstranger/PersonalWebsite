import { Card, Col, Container, Row } from 'react-bootstrap';
import '../main.css';

const Resume: React.FC = () => {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col>
                        <h1 className='text-center section-title'>My Resume</h1>
                        <p className='text-center'>
                            <a href='/cv2024-7.pdf' download className='linkStyle resume-link'><strong>Download my resume</strong></a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-4'>
                            <Card.Body>
                                <Card.Title>Technical Experience</Card.Title>
                                <Card.Text>
                                    <ul className='skill-list'>
                                        <li>
                                            <strong>Personal Website</strong>
                                            <ul>
                                                <li>Developed using TypeScript, React, Docker, React-Bootstrap, Material-UI, and CSS.</li>
                                                <li>Utilized GitHub Workflows for continuous integration and deployment.</li>
                                                <li>Gained hands-on experience with modern web development tools and frameworks.</li>
                                                <li>Enhanced my skills in responsive design and user experience.</li>
                                                <li>Improved my proficiency in front-end development.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Blog App</strong>
                                            <ul>
                                                <li>Developed using JavaScript, React, Node.js, Express.js, MongoDB, and React-Bootstrap.</li>
                                                <li>Implemented end-to-end testing with Playwright Tests to ensure application reliability.</li>
                                                <li>Deployed the application using Fly.io for scalable and efficient hosting.</li>
                                                <li>Utilized GitHub Workflows for continuous integration and deployment.</li>
                                                <li>Enhanced my skills in full-stack development, including both front-end and back-end technologies.</li>
                                                <li>Gained experience in building and deploying a web application with a modern tech stack.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Other Projects</strong>
                                            <ul>
                                                <li>Built an iOS app using React Native as part of the Full Stack Open React Native course, enhancing my mobile development skills.</li>
                                                <li>Developed a Tower of Hanoi game in Java with a user interface, demonstrating my ability to create interactive applications.</li>
                                                <li>Completed several school projects where I learned data structures and algorithms using Java, gaining a deep understanding of these fundamental concepts.</li>
                                                <li>Created a maze game using Bash scripting, showcasing my proficiency in shell scripting and automation.</li>
                                                <li>Improved my problem-solving skills and ability to work on a variety of projects across different technologies.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href='/portfolio' className='linkStyle resume-link'><strong>Click Here to see my projects</strong></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-4'>
                            <Card.Body>
                                <Card.Title>Employment</Card.Title>
                                <Card.Text>
                                    <ul className='skill-list'>
                                        <li>
                                            <strong>Magazine Distributor</strong> (Posti Oy, Summer 2020)
                                            <ul>
                                                <li>Taught me the importance of time management, self-discipline, and reliability.</li>
                                                <li>Involved making deliveries within strict deadlines and without any direct supervision.</li>
                                                <li>Improved my adaptability and work ethic.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Property Maintenance</strong> (ISS Oy, Summer 2021)
                                            <ul>
                                                <li>Efficiently managed routine inspections and maintenance of numerous properties across Helsinki.</li>
                                                <li>Learned problem-solving abilities by quickly addressing and resolving maintenance issues.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>On-Demand Jobs</strong> (Treamer Oy, Summers 2022-2023)
                                            <ul>
                                                <li>Worked multiple on-demand jobs such as car rental worker (Avis Oy), festival worker (Rockfest), mover, and a grocery associate (Wolt Oy).</li>
                                                <li>Improved the following areas whilst working: customer service, resilience, time management, attention to detail, adaptability, organizational skills, effective communication and collaboration, problem-solving abilities.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Landscaping</strong> (Toni Redsven OU, Summer 2023)
                                            <ul>
                                                <li>Involved in landscaping at Helsinki-Vantaa International Airport, showcasing strong skills in grounds maintenance under diverse weather conditions.</li>
                                                <li>Ensured visually appealing and safe environments for all travelers.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-4'>
                            <Card.Body>
                                <Card.Title>Education</Card.Title>
                                <Card.Text>
                                    <ul className='skill-list'>
                                        <li>
                                            <strong>Eastern Wyoming College</strong>
                                            <ul>
                                                <li>Fall 2020 - May 2022</li>
                                                <li>Associate's Degree in Mathematics</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>University of North Alabama</strong>
                                            <ul>
                                                <li>Summer 2022 - May 2023</li>
                                                <li>Began B.S. in Computer Science</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>University of Texas at Tyler</strong>
                                            <ul>
                                                <li>Fall 2023 - Present</li>
                                                <li>Currently pursuing B.S. in Computer Science with a GPA of 3.8</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p><strong>Undergraduate Coursework Completed:</strong></p>
                                    <p>
                                        Operating Systems, Relational Databases, Data Structures, Algorithms, Object-Oriented Programming, Programming Languages, Applied Statistics, Information Security, Calculus III
                                    </p>
                                    <a href='/education' className='linkStyle resume-link'><strong>Click here to see more about my education</strong></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-4'>
                            <Card.Body>
                                <Card.Title>Additional Experience</Card.Title>
                                <Card.Text>
                                    <ul className='skill-list'>
                                        <li>
                                            <strong>NJCAA and NCAA Athlete (2020 - Present)</strong>
                                            <ul>
                                                <li>Competed at NCAA Division 1 and Division 2 levels in basketball while completing my B.S. in Computer Science, and learned valuable skills such as effective teamwork, great communication, and physical and mental discipline.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Helsinki University</strong>
                                            <ul>
                                                <li>Assistant for my mother. Responsibilities included helping everyone, managing the storage room, printing papers, and working on a nationwide project. This job involved checking and reviewing texts, coping with sudden changes and problems, and taking responsibility in the storage room.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Language Skills</strong>
                                            <ul>
                                                <li>English - Native proficiency</li>
                                                <li>Finnish - Native proficiency</li>
                                                <li>Russian - Native proficiency</li>
                                                <li>Swedish - Limited working proficiency</li>
                                                <li>Spanish - Limited working proficiency</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                                                <Card className='mb-4'>
                                                    <Card.Body>
                                                        <Card.Title>Languages</Card.Title>
                                                        <Card.Text>
                                                            Here are some programming languages I have worked with:
                                                            <ul className='skill-list'>
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
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className='mb-4'>
                                                    <Card.Body>
                                                        <Card.Title>Tools & IDEs</Card.Title>
                                                        <Card.Text>
                                                            Here are some tools and IDEs I have used:
                                                            <ul className='skill-list'>
                                                                <li><strong>Visual Studio</strong> - Integrated development environment</li>
                                                                <li><strong>IntelliJ IDEA</strong> - IDE for Java and other languages</li>
                                                                <li><strong>MySQL Workbench</strong> - MySQL database design and management</li>
                                                                <li><strong>Xcode</strong> - IDE for iOS development</li>
                                                                <li><strong>RStudio</strong> - IDE for R programming</li>
                                                                <li><strong>VMware</strong> - Virtualization software</li>
                                                                <li><strong>Git</strong> - Version control system</li>
                                                                <li><strong>Docker</strong> - Containerization platform</li>
                                                            </ul>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className='mb-4'>
                                                    <Card.Body>
                                                        <Card.Title>Additional Skills</Card.Title>
                                                        <Card.Text>
                                                            Here are some additional skills and technologies:
                                                            <ul className='skill-list'>
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
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                     </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;
