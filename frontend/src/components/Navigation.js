import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import VendorLogin from './VendorLogin'
import VendorRegister from './VendorRegister'
import recycleLogo from '../images/recycle.svg'

class Navigation extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand as={Link} to="/">
                            <img alt="Main Logo" src={recycleLogo} width="30" height="30" className="d-inline-block align-top mr-2"/> 
                            Sustain Market
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/something">Something</Nav.Link>
                            <Nav.Link as={Link} to="/people/vendors/login">For Vendors</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/people/vendors/login" component={VendorLogin}/>
                        <Route exact path="/people/vendors/register" component={VendorRegister} />
                        {/* Response when page not found */}
                        <Route render={
                            function() {
                                return <p>Not found</p>
                            }
                        } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Navigation