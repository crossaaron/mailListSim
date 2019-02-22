import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Inbox from "./Inbox";
import EmailRead from './EmailRead'
import EMAILS from "../MOCK_DATA";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: EMAILS
        }
    }

    render() {

        return (
            <div id='app-container'>
                <BrowserRouter>
                    <Fragment>
                        <Route exact path='/' component={() => (
                            <Inbox emails={this.state.emails} />
                        )}/>
                        <Route exact path='/read/:id' component={() => (
                            <EmailRead emails={this.state.emails} />
                            )} />
                    </Fragment>
                </BrowserRouter>
            </div>
        )

    }
}