import { Container, Row, Col, Image } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import '../main.css'

const Footer: React.FC = () => {
    const linkStyle = {
        color: 'white', 
        textDecoration: 'none',
        transition: 'color 0.3 ease', 
    }

    const MouseOver = (event) => {
        event.target.style.color = 'lightgrey'
    }
    
    const MouseOut = (event) => {
        event.target.style.color = 'white'
    }

    return (
        <footer className='mt-4 bg-dark text-light'>
            <Container className='py-3'>
                <Row>
                    <Col md={4}>
                        <h5>Contact me</h5>
                        <p>Email: <a href='mailto:nikolas.gustavson4@gmail.com' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>nikolas.gustavson4@gmail.com</a></p>
                        <p>Phone: <a href='tel:+14304370707' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>+1 (430) 437-0707</a></p>
                        <IconButton>
                            <a href='https://instagram.com/nikolasgustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginTop: -20, marginLeft: -11 }}>
                                <InstagramIcon />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href='https://github.com/thefinnishstranger' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginTop: -20 }}>
                                <GitHubIcon />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href='https://x.com/nikgustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginTop: -20 }}>
                                <XIcon />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href='https://www.facebook.com/nikolas.gustavson' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginTop: -20 }}>
                                <FacebookIcon />
                            </a>
                        </IconButton>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Home</a></li>
                            <li><a href='/portfolio' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Portfolio</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/skills' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Skills</a></li>
                            <li><a href='/education' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Education</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/resume' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Resume</a></li>
                            <li><a href='/certifications' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Certifications</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/basketball' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Basketball</a></li>
                            <li><a href='/contact' style={linkStyle} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Contact me</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer