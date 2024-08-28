import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './main.css';
import MainPage from './pages/MainPage'

const MainRouter: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate()

    const handleLinkClick = () => {
        setExpanded(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setExpanded(false);
            }
        };

        if (expanded) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [expanded]);

    const handleBrandClick = (event: React.MouseEvent) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/')
        handleLinkClick();
    };

    const onNavClick = (path: string, elementId: string) => {
        setExpanded(false);
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
        <>
            <Navbar
                expand='lg'
                variant='light'
                className='custom-navbar custom-navbar-bg'
                fixed='top'
                expanded={expanded}
                ref={navbarRef}
            >
                <Navbar.Brand as={Link} to='#' onClick={handleBrandClick} className='home-link'>
                    Nikolas Gustavson
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='basic-navbar-nav'
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="mr-auto nav-bar-collapse">
                        <Nav.Link onClick={handleBrandClick} className='nav-link'>Home</Nav.Link>
                        <Nav.Link onClick={() => onNavClick('/portfolio', 'portfolio')} className='nav-link'>Portfolio</Nav.Link>
                        <Nav.Link onClick={() => onNavClick('/education', 'education')} className='nav-link'>Education</Nav.Link>
                        <Nav.Link onClick={() => onNavClick('/certifications', 'certifications')} className='nav-link'>Certifications</Nav.Link>
                        <Nav.Link onClick={() => onNavClick('/basketball', 'basketball')} className='nav-link'>Basketball</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <MainPage />
        </>
    );
}

export default MainRouter;
