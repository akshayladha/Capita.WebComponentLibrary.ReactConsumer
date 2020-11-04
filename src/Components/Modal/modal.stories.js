import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default { title: 'Modal' };

export const Modal = () => (
  <div className="container" style={{ paddingTop: "20px" }}>
    <div className="row">
      <h5 style={{ paddingBottom: "10px" }}>Modal</h5>
      <Tabs
        style={{ width: "100%" }}
        className="tab-container-with-green-border"
        headerClass="tab-header-bold"
        activeHeaderClass="tab-header-blue"
        contentClass="tab-content-yellow">

        <Tab label="Demo">
          <br />
          <>
            <cc-modal header="Header" id="modal">
              <cc-login
                forgot="https://www.capita.com/"
                signup="https://www.capita.com/"
                login="https://www.capita.com/"
              />
            </cc-modal>

            <button onClick={() => document.getElementById('modal').open()}> Open Modal</button >
          </>
        </Tab>

        <Tab label="How to use">
          <br />
          <pre>
            <code>{
`<>
    <cc-modal header="Header" id="modal">
        <cc-login
          forgot="https://www.capita.com/"
            signup="https://www.capita.com/"
              login="https://www.capita.com/"
        />
    </cc-modal>

    <button onClick={() => document.getElementById('modal').open()}> Open Modal</button >
</>`
            }</code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  </div>
);