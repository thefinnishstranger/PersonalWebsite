import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Intro from './pages/Intro';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';
import Basketball from './pages/Basketball';
import ContactPage from './pages/ContactPage';
import './main.css';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './pages/MainPage'

const MainRouter: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [homeLink, setHomeLink] = useState('/');
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const handleLinkClick = () => {
        setExpanded(false);
    };

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setHomeLink('#');
        } else {
            setHomeLink('/');
        }
    }, [location.pathname]);

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
        if (homeLink === '#') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        handleLinkClick();
    };

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
                <Navbar.Brand as={Link} to={homeLink} onClick={handleBrandClick} className='home-link'>
                    Nikolas Gustavson
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='basic-navbar-nav'
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="mr-auto nav-bar-collapse w-100 justify-content-between">
                        <Nav.Link as={Link} to='/' onClick={handleLinkClick} className='nav-link'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/portfolio' onClick={handleLinkClick} className='nav-link'>Portfolio</Nav.Link>
                        <Nav.Link as={Link} to='/education' onClick={handleLinkClick} className='nav-link'>Education</Nav.Link>
                        <Nav.Link as={Link} to='/certifications' onClick={handleLinkClick} className='nav-link'>Certifications</Nav.Link>
                        <Nav.Link as={Link} to='/basketball' onClick={handleLinkClick} className='nav-link'>Basketball</Nav.Link>
                        <Nav.Link as={Link} to='/contact' onClick={handleLinkClick} className='nav-link'>Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='content-wrapper'>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/basketball" element={<Basketball />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </ScrollToTop>
            </div>
        </>
    );
}

export default MainRouter;
