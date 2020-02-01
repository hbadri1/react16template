import React, {useContext} from 'react'
import './header.css'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, Badge} from 'react-bootstrap'
import LangContext from '../../../context/langContext'
import AuthContext from '../../../context/authContext'


const Header = () => {
    const { lang , switchLang, currentLangData} = useContext(LangContext)
    const { user, signOut} = useContext(AuthContext)

    const { HOME } = currentLangData

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/dashboard">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">{HOME}</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/analytics">Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/separatedLink">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button variant="light" onClick={switchLang} className="es-btn-lang">
                        <i className="fas fa-globe fa-2x"></i>
                        <sup className="es-lang"><Badge variant="light" pill>{lang === 'en' ? 'E' : 'ع'}</Badge></sup>
                    </Button >
                    {
                        user ? 
                        <Button variant="light" onClick={signOut} className="es-btn-lang">
                            <i className="fas fa-globe fa-2x"></i>
                            <sup className="es-lang"><Badge variant="light" pill>LOG_OUT</Badge></sup>
                        </Button >
                        :
                        null
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header