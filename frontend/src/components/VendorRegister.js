import React, { Component } from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import "../css/Vendor.css";
import newAdminLogo from '../images/user-avatar-with-check-mark.svg'

class VendorRegister extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <h1 style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="Main Logo" src={newAdminLogo} width="150" height="150" className="d-inline-block align-top" />
                        </h1><br /><br />
                        
                    </Form>
                </Container>
            </div>
        );
    }
}

export default VendorRegister