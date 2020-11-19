import React, { Component } from 'react'

class VendorDash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {}
        }

    }

    componentDidMount() {

        const vendorID = localStorage.getItem("vendorID")
        // console.log(this.props.match.params.id)
        // console.log(vendorID + " is the best!!")

        const requestOptions = {
            method: 'GET'
        }

        fetch("/api/people/vendors/profile/"+vendorID, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    profile: data[0]
                })
                // console.log(this.state.profile)
            })
    }

    render() {
        return (
            <div>
                <h1>Abhiraj Chatterjee</h1>
            </div>
        );
    }
}

export default VendorDash