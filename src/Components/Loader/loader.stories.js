import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default { title: 'Loader' };

export const Loader = () => (
  <div className="container" style={{ paddingTop: "20px" }}>
    <div className="row">
      <h5 style={{ paddingBottom: "10px" }}>Loader</h5>
      <Tabs
        style={{ width: "100%" }}
        className="tab-container-with-green-border"
        headerClass="tab-header-bold"
        activeHeaderClass="tab-header-blue"
        contentClass="tab-content-yellow">

        <Tab label="Demo">
          <br />
          <cc-loader></cc-loader>
        </Tab>

        <Tab label="How to use">
          <br />
          <code>{"<cc-loader></cc-loader>"}</code>
        </Tab>
      </Tabs>
    </div>
  </div>
);