import React, {useContext} from 'react'
import './header.css'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl} from 'react-bootstrap'
import UserContext from '../../../context/context'


const Header = () => {
    const user = useContext(UserContext)
    console.log(user)
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
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
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header