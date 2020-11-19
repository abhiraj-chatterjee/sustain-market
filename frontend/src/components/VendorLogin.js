import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import '../css/Vendor.css'
import adminLogo from '../images/admin-with-cogwheels.svg'
import { Link } from 'react-router-dom'

class VendorLogin extends Component {
    render() {
        return (
          <div>
            <Container>
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                <img alt="Main Logo" src={adminLogo} width="150" height="150" className="d-inline-block align-top" />
              </h1><br /><br />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group><br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outline-primary" type="submit" size="lg" block> Login </Button>
                </div><br />
                <Link to="/people/vendors/register">New Vendor?</Link>
              </Form>
            </Container>
          </div>
        );
    }
}

export default VendorLogin