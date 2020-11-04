import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default { title: 'Login Form' };

export const Login = () => (
    <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
            <h5 style={{ paddingBottom: "10px" }}>Login Form</h5>
            <Tabs
                style={{ width: "100%" }}
                className="tab-container-with-green-border"
                headerClass="tab-header-bold"
                activeHeaderClass="tab-header-blue"
                contentClass="tab-content-yellow">

                <Tab label="Demo">
                    <br />
                    <cc-login></cc-login>
                </Tab>
                <Tab label="How to use">
                    <br />
                    <code>{"<cc-login> </cc-login>"}</code>
                </Tab>
            </Tabs>
        </div>
    </div>
);