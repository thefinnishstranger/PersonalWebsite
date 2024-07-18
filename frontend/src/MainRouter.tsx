import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Intro from './pages/Intro'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Resume from './pages/Resume'
import Certifications from './pages/Certifications'
import Basketball from './pages/Basketball'
import ContactPage from './pages/ContactPage'


const MainRouter: React.FC = () => {
    const [expanded, setExpanded] = useState(false)

    const handeLinkClick = () => {
        setExpanded(false)
    }

    return (
        <>
        <Navbar 
        bg='dark grey'
        variant='dark'
        expand='lg'
        className='custom-navbar'
        expanded={expanded}>
            <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className='burger'
                onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/' onClick={handeLinkClick} className="text-white">Home</Nav.Link>
                    <Nav.Link as={Link} to='/portfolio' onClick={handeLinkClick} className="text-white">Portfolio</Nav.Link>
                    <Nav.Link as={Link} to='/skills' onClick={handeLinkClick} className="text-white">Skills</Nav.Link>
                    <Nav.Link as={Link} to='/education' onClick={handeLinkClick} className="text-white">Education</Nav.Link>
                    <Nav.Link as={Link} to='/resume' onClick={handeLinkClick} className="text-white">Resume</Nav.Link>
                    <Nav.Link as={Link} to='/certifications' onClick={handeLinkClick} className="text-white">Certifications</Nav.Link>
                    <Nav.Link as={Link} to='/basketball' onClick={handeLinkClick} className="text-white">Basketball</Nav.Link>
                    <Nav.Link as={Link} to='/contact' onClick={handeLinkClick} className="text-white">Contact me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </>
    )
}

export default MainRouter