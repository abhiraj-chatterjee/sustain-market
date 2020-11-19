import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../css/Vendor.css";
import adminLogo from "../images/admin-with-cogwheels.svg";
import { Link, Redirect } from "react-router-dom";

class VendorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      vendorID: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'email': event.target.email.value,
        'password': event.target.password.value
      }),
    }

    fetch("/api/people/vendors/verify", requestOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('vendorID', data[0]["_id"]["$oid"])
        this.setState({
          isSubmitted: true,
          vendorID: data[0]["_id"]["$oid"]
        })
      })

  }

  render() {
    if (this.state.isSubmitted) {
      return (<Redirect to={`/people/vendors/${this.state.vendorID}`} />)
    }
    return (
      <div>
        <Container>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            <img alt="Main Logo" src={adminLogo} width="150" height="150" className="d-inline-block align-top" />
          </h1><br /><br />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter company email address" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter password" />
            </Form.Group><br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outline-primary" type="submit" size="lg" block>Login</Button>
            </div><br />
            <Link to="/people/vendors/register">New Vendor?</Link>
          </Form>
        </Container>
      </div>
    );
  }
}

export default VendorLogin;
