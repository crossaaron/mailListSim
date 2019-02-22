import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Inbox from "./Inbox";
import EmailRead from './EmailRead'
import EMAILS from "../MOCK_DATA";
import Nav from './Nav'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: EMAILS,
            isRead: {
                "e4cb2243-7453-461c-a824-55ad3cbfd571": true
            }
        };

        this.markRead = this.markRead.bind(this);
        this.markUnread = this.markUnread.bind(this);
    }

    markRead(emailId) {
        let isRead = {...this.state.isRead};
        isRead[emailId] = true;
        this.setState({isRead})
    }

    markUnread(emailId) {
        let isRead = {...this.state.isRead};
        isRead[emailId] = false;
        this.setState({isRead})
    }


    render() {

        return (
            <div id='app-container'>
                <BrowserRouter>
                    <Fragment>
                        <Nav />
                        <Route exact path='/' component={() => (
                            <Inbox emails={this.state.emails}
                                   isRead={this.state.isRead}
                                   markRead={this.markRead}
                                   markUnread={this.markUnread} />
                        )}/>
                        <Route exact path='/read/:id' component={() => (
                            <EmailRead emails={this.state.emails}
                                       markRead={this.markRead} />
                            )} />
                    </Fragment>
                </BrowserRouter>
            </div>
        )

    }
}