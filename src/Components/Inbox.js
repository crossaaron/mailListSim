import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EmailRow from './EmailRow'



export default class Inbox extends Component {

    render() {
    console.log('**INBOX' + this.props);
        return (
            <div id='inbox'>
                <h1>Inbox</h1>
                <p>You have {this.props.emails.length} emails</p>
                <div id='all-emails'>
                    {this.props.emails.map((email, index) => {
                        return (
                            <Link key={index} to={`/read/${email.id}`}>
                                <EmailRow email={email} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )

    }
}