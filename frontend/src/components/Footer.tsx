import { Container, Row, Col } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import '../main.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate()

    const MouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = 'grey'
    }
    
    const MouseOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = 'black'
    }

    const handleBrandClick = (event: React.MouseEvent) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/')
    };

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
        <footer className='mt-4 footer'>
            <Container className='py-3 mt-2'>
                <Row>
                    <Col md={3} lg={3}>
                        <h5>My contacts:</h5>
                        <p>Email: <a href='mailto:nikolas.gustavson4@gmail.com' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>nikolas.gustavson4@gmail.com</a></p>
                        <p>Phone: <a href='tel:+14304370707' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>+1 (903) 360-4656</a></p>
                        <IconButton className={'MyCustomButton'}>
                            <a href='https://www.linkedin.com/in/ngustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'black', marginTop: -20, marginLeft: -11 }}>
                                <LinkedInIcon />
                            </a>
                        </IconButton>
                        <IconButton className={'MyCustomButton'}>
                            <a href='https://instagram.com/nikolasgustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'black', marginTop: -20 }}>
                                <InstagramIcon />
                            </a>
                        </IconButton>
                        <IconButton className={'MyCustomButton'}>
                            <a href='https://github.com/thefinnishstranger' target='_blank' rel='noopener noreferrer' style={{ color: 'black', marginTop: -20 }}>
                                <GitHubIcon />
                            </a>
                        </IconButton>
                        <IconButton className={'MyCustomButton'}>
                            <a href='https://x.com/nikgustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'black', marginTop: -20 }}>
                                <XIcon />
                            </a>
                        </IconButton>
                        <IconButton className={'MyCustomButton'}>
                            <a href='https://www.facebook.com/nikolas.gustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'black', marginTop: -20 }}>
                                <FacebookIcon />
                            </a>
                        </IconButton>
                    </Col>
                    <Col md={9} lg={9} className='d-flex justify-content-end'>
                        <Row>
                        <Col className=''>
                        <ul className='list-unstyled'>
                            <li><Link to='/' className='linkStyle' onClick={handleBrandClick} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Home</Link></li>
                            <li><Link to='/portfolio' className='linkStyle' onClick={() => onNavClick('/portfolio', 'portfolio')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Portfolio</Link></li>
                        </ul>
                           </Col>
                        </Row>
                        <Row>
                        <Col className='mx-5'>
                        <ul className='list-unstyled'>
                            <li><Link to='/certifications' className='linkStyle' onClick={() => onNavClick('/certifications', 'certifications')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Certifications</Link></li>
                            <li><Link to='/education' className='linkStyle' onClick={() => onNavClick('/education', 'education')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Education</Link></li>
                        </ul>
                    </Col>
                        </Row>
                        <Row>
                        <Col className=''>
                        <ul className='list-unstyled'>
                            <li><Link to='/basketball' className='linkStyle' onClick={() => onNavClick('/basketball', 'basketball')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Basketball</Link></li>
                            <li><Link to='/contact' className='linkStyle' onClick={() => onNavClick('/contact', 'contact')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Contact me</Link></li>
                        </ul>
                    </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer