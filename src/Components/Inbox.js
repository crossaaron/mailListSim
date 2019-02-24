import React, { Component } from 'react'
import EmailRow from './EmailRow'

export default class Inbox extends Component {

    render() {
        return (
            <div id='inbox'>
                <h1>Inbox</h1>
                <p>You have {this.props.emails.length} emails</p>
                <p>
                    <button onClick={this.props.markSelectedRead}>mark read</button>
                    <button onClick={this.props.markSelectedUnread}>mark unread</button>
                </p>
                <div id='all-emails'>
                    {this.props.emails.map((email, index) => {
                        return (
                            <EmailRow key={index}
                                      email={email}
                                      isRead={this.props.isRead}
                                      isSelected={this.props.isSelected}
                                      markRead={this.props.markRead}
                                      markUnread={this.props.markUnread}
                                      markSelectedRead={this.props.markSelectedRead}
                                      markSelectedUnread={this.props.markSelectedUnread}
                                      select={this.props.select}
                                      deselect={this.props.deselect}
                            />
                        )
                    })}
                </div>
            </div>
        )

    }
}