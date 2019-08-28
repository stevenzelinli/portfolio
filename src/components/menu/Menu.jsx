import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../../styles/_menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Menu = () => (
    <Navbar className="smooth-scroll" sticky="top">
        <Navbar.Collapse>
            <Nav className="smooth-scroll">
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <a href="https://github.com/stevenzelinli">
            <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/steven-li-2609b1b9/">
            <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
        </a>
    </Navbar>
);

export default Menu;
