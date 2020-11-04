import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default { title: 'Progress Bar' };

export const ProgressBar = () => (
    <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
            <h5 style={{ paddingBottom: "10px" }}>Progress Bar</h5>
            <Tabs
                style={{ width: "100%" }}
                className="tab-container-with-green-border"
                headerClass="tab-header-bold"
                activeHeaderClass="tab-header-blue"
                contentClass="tab-content-yellow">

                <Tab label="Demo">
                    <br />
                    <cc-progress-bar complete={20}></cc-progress-bar>
                    <br />
                    <cc-progress-bar complete={60}></cc-progress-bar>
                    <br />
                    <cc-progress-bar complete={95}></cc-progress-bar>
                </Tab>

                <Tab label="How to use">
                    <br />
                    <code>{"<cc-progress-bar complete='10'></cc-progress-bar>"}</code>
                </Tab>
            </Tabs>
        </div>
    </div>
);

function test() {
    // let progress = document.querySelector('cc-progress-bar')
    // complete = 0;

    // let progressInterval = setInterval(() => {
    //     complete += 1;

    //     if (complete <= 100) {
    //         progress.setAttribute('complete', complete);
    //     } else {
    //         clearInterval(progressInterval);
    //     }
    // }, 100);
}