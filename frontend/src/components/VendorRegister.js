import React, { Component } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import "../css/Vendor.css"
import newAdminLogo from '../images/user-avatar-with-check-mark.svg'

class VendorRegister extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }

    handleChange(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h1 style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="Main Logo" src={newAdminLogo} width="150" height="150" className="d-inline-block align-top" />
                        </h1><br /><br />
                        <Form.Group controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onChange={this.handleChange} type="text" placeholder="Enter company name" />
                        </Form.Group>
                        <Form.Group controlId="formGridEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Enter company email address" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password1" onChange={this.handleChange} type="password" placeholder="Enter password" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword2">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="password2" onChange={this.handleChange} type="password" placeholder="Enter password again" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control name="address1" onChange={this.handleChange} type="text" placeholder="1234 Main Street" />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control name="address2" onChange={this.handleChange} type="text" placeholder="Apartment, floor, or studio" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" onChange={this.handleChange} type="text" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control name="state" onChange={this.handleChange} type="text" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control name="zip" onChange={this.handleChange} type="text" />
                            </Form.Group>
                        </Form.Row><br />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button variant="outline-success" type="submit" size="lg" block> Submit Data </Button>
                        </div><br />
                    </Form>
                </Container>
            </div>
        );
    }
}

export default VendorRegister