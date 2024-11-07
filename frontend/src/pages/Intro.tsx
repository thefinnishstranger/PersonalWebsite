import { Container, Row, Col, Image } from "react-bootstrap";
import profilePicture from '/nikPhoto2.png'
import '../intro.css';
import { useNavigate } from "react-router-dom";

const Intro: React.FC = () => {
    const navigate = useNavigate();

    const onNavClick = (path: string, elementId: string) => {
        navigate(path);
    
        const element = document.getElementById(elementId);
        const navbarHeight = document.querySelector('.custom-navbar')?.clientHeight || 0;
    
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.screenY;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth'
            })
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Container className="intro-container" fluid>
            <Row className="justify-content-center align-items-center text-center full-height">
            <Col md={4}>
                    <Image src={profilePicture} alt="Nikolas Gustavson" className="profile-picture" />
                </Col>
                <Col md={8}>
                    <p className="intro-text">
                        Hello, I am a Full Stack Web Developer <i className="wave-emoji">👋</i>
                    </p>
                    <a onClick={() => onNavClick('/contact', 'contact')} className='nav-link'>
                        <button className="connect-button">Let's Connect</button>
                    </a>
                    <div>
                        <p className="tech-stack">
                            My tech stack:
                        </p>
                        <i className="devicon-typescript-plain colored tech-logo"></i>
                        <i className="devicon-html5-plain colored tech-logo"></i>
                        <i className="devicon-css3-plain colored tech-logo"></i>
                        <i className="devicon-react-original colored tech-logo"></i>
                        <i className="devicon-reactbootstrap-original colored tech-logo"></i>
                        <i className="devicon-mongodb-plain colored tech-logo"></i>
                        <i className="devicon-tailwindcss-original colored tech-logo"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Intro;