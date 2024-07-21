import { Container, Row, Col } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import '../main.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Footer: React.FC = () => {
    const [toHomeLink, setToHomeLink] = useState('/')
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setToHomeLink('#')
        } else {
            setToHomeLink('/')
        }
    }, [location.pathname])

    const MouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = 'grey'
    }
    
    const MouseOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = 'black'
    }

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (toHomeLink === '#') {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <footer className='mt-4 footer'>
            <Container className='py-3 mt-2'>
                <Row>
                    <Col md={4}>
                        <h5>Contact me</h5>
                        <p>Email: <a href='mailto:nikolas.gustavson4@gmail.com' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>nikolas.gustavson4@gmail.com</a></p>
                        <p>Phone: <a href='tel:+14304370707' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>+1 (430) 437-0707</a></p>
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
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/' className='linkStyle' onClick={handleClick} onMouseOver={MouseOver} onMouseLeave={MouseOut}>Home</a></li>
                            <li><a href='/portfolio' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Portfolio</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/skills' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Skills</a></li>
                            <li><a href='/education' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Education</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/resume' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Resume</a></li>
                            <li><a href='/certifications' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Certifications</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className=''>
                        <ul className='list-unstyled'>
                            <li><a href='/basketball' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Basketball</a></li>
                            <li><a href='/contact' className='linkStyle' onMouseOver={MouseOver} onMouseLeave={MouseOut}>Contact me</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer