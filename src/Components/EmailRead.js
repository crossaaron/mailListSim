import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class EmailRead extends Component {
    render() {
        const emailId = this.props.match.params.id;
        const email = this.props.emails.filter(email => {
            return email.id === emailId
        })[0]

        return (
            <div>
                <h1>{email.subject}</h1>
                <h3>{email.date} {' '} {email.email}</h3>
                <p>{email.body}</p>
            </div>
        )

    }
}
export default withRouter(EmailRead)