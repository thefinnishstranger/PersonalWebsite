import { Container, Row, Col, Image } from "react-bootstrap";
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

    return (
        <Container>
            <Row>
                <h1>My Certifications</h1>
                <Col md={4} className="certificate-container">
                    <a href={fullstackUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="Fullstack">
                            <Image src={fullstack} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={graphQLUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="GraphQL">
                            <Image src={graphQL} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={typescriptUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="TypeScript">
                            <Image src={typescript} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="certificate-container">
                    <a href={reactNativeUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="React Native">
                            <Image src={reactNative} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={CIUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="CI/CD">
                            <Image src={CI} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={containersUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="Containers">
                            <Image src={containers} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="certificate-container">
                    <a href={webDesignUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="Web Design">
                            <Image src={webDesign} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={javascriptUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="JavaScript">
                            <Image src={javascript} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
                <Col md={4} className="certificate-container">
                    <a href={librariesUrl} target="_blank" rel="noopener noreferrer">
                        <div className="certificate-frame" data-text="Libraries">
                            <Image src={libraries} alt="certificate" fluid />
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Certifications;
