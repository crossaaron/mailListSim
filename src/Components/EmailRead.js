import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class EmailRead extends Component {
    render() {
        const emailId = this.props.match.params.id;
        const email = this.props.emails.filter(email => {
            email.id === emailId
        })[0]
        console.log('email', email);
        return (
            <div>
                <h1>{this.props.email.subject}</h1>
                <h3>{this.props.email.date} {' '} {this.props.email.email}</h3>
                <p>{this.props.email.body}</p>
            </div>
        )
    }
}

export default withRouter(EmailRead)