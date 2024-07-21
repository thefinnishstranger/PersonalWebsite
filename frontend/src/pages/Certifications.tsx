import { Container, Row, Col, Card } from "react-bootstrap";
import fullstack from '../resources/certificate-fullstack-2.png';
import graphQL from '../resources/certificate-graphql.png';
import typescript from '../resources/certificate-typescript.png';
import reactNative from '../resources/certificate-reactnative.png';
import CI from '../resources/certificate-cicd.png';
import containers from '../resources/certificate-containers.png';
import webDesign from '../resources/webDesign.png';
import javascript from '../resources/javascript.png';
import libraries from '../resources/libraries.png';
import '../main.css'; // Make sure this line is included

const Certifications: React.FC = () => {
    const fullstackUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ff5e7da23bf300321a2033ae6f7b11fd';
    const graphQLUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/ff44b077f0e32c7764986b9a3c651a1a';
    const typescriptUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/da631aee2a5296e00e2ac75ea379ca17';
    const reactNativeUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/7f1cb885eb566062ebc3a9dc8063cbdd';
    const CIUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/ad64d46c6ddf55cfb6b1f1a91028c97d';
    const containersUrl = 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/20a35ce253a5d9a0f48d0d5fc01cb6b9';
    const webDesignUrl = 'https://freecodecamp.org/certification/theFinnishStranger/responsive-web-design';
    const javascriptUrl = 'https://freecodecamp.org/certification/theFinnishStranger/javascript-algorithms-and-data-structures-v8';
    const librariesUrl = 'https://freecodecamp.org/certification/theFinnishStranger/front-end-development-libraries';

    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1 className="text-center">My Certifications</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={fullstackUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={fullstack} alt="certificate" />
                        <Card.Body>
                            <Card.Title className="text-center">Fullstack Web Development</Card.Title>
                        </Card.Body>
                    </a>
                </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={graphQLUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={graphQL} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    GraphQL
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={typescriptUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={typescript} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    TypeScript
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={reactNativeUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={reactNative} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    React Native
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={CIUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={CI} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    CI/CD
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={containersUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={containers} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Containers
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={webDesignUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={webDesign} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Web Design
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={javascriptUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={javascript} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    JavaScript
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
                <Col md={4} className="certificate-container">
                    <Card>
                    <a href={librariesUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <Card.Img variant="top" src={libraries} alt="certificate" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Frontend libraries
                                </Card.Title>
                            </Card.Body>
                    </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Certifications;
