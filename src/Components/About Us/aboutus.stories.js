import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default { title: 'About Us' };

export const Idea = () => (
    <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
            <section>
                <h2>Web Components Library</h2>
                <p>
                    Web Components can be used with basically any JavaScript framework or no framework at all.
                    This means we can support all our products teams from a single codebase.
                    This project containing all the common components and a web page describing those components
                    and their all possible usage.
                </p>
            </section>
        </div>

        <div className="row">
            <section>
                <h5>Why we need this?</h5>
                <p>
                    Currently we do not have any web component library. So, we are creating same web component or
                    modules multiple times in different projects, its resulting in redundant work which indirectly
                    slowing down the development process and increasing the development cost.
                    </p>
            </section>
        </div>

        <div className="row">
            <section>
                <h5>How it will help us?</h5>
                <p>
                    This Common Web Component library can be easily plugged-in in any web project from any technology
                    and it contain all the common components used across SSS projects.

                    This library will guide you about how to use those components and their all possible usage.
                      </p>
            </section>
        </div>

        <hr />
        <div className="row">
            <section>
                <h5>What are the Benefits?</h5>
                <ul>
                    <li>Web Components can be used with basically <code>{"any JavaScript framework"}</code> or no framework at all.
                         This means we can support all our products teams from a single codebase.</li>
                    <li>This makes it possible for our teams to be very efficient.</li>
                    <li>Reusable components will help for <code>{"faster web development."}</code></li>
                    <li>Simple to use, Just link with node module and use.</li>
                    <li><code>{"Reduce Development cost."}</code></li>
                    <li>Easy theme management.</li>
                    <li>Will build good communication across teams as anyone from any team could contribute to this library.</li>
                    <li>This library will give brief overview of web components to existing and new developers.</li>
                    <li><code>{"Same coding standard across the projects."}</code></li>
                    <li>Would <code>{"avoid redundancy of code."}</code></li>
                    <li>Fixing the bugs or adding new features would be easier as the changes would be required only at one place
                        which will result in <code>{"Reduced bug fixing cost and regression."}</code></li>
                </ul>
            </section>
        </div>

        <hr />

        <div className="row">
            <section>
                <h5>The Team</h5>
                <Tabs
                    className="tab-container-with-green-border"
                    headerClass="tab-header-bold"
                    activeHeaderClass="tab-header-blue"
                    contentClass="tab-content-yellow">

                    <Tab label="Ashish" >
                        <p style={{ padding: "10px" }}>
                            <b>Idea-tor: Propose Idea to have a common web component library</b>
                            <br /><br />
                            Created a dashboard to display all web components created by the team
                        </p>
                    </Tab>
                    <Tab label="Jitendra" >
                        <p style={{ padding: "10px" }}>
                            <b>Web Components Master</b> - Create Web Components which is used by everyone<br /><br />
                        </p>
                    </Tab>
                    <Tab label="Sheifali" >
                        <p style={{ padding: "10px" }}>
                            <b>Vue Master</b> - Integrated Common Components with Vue framework<br /><br />
                        </p>
                    </Tab>
                    <Tab label="Shivanshu" >
                        <p style={{ padding: "10px" }}>
                            <b>VanillaJs Master</b> - Integrated Common Components with Vanilla Js<br /><br />
                        </p>
                    </Tab>
                    <Tab label="Prasad" >
                        <p style={{ padding: "10px" }}>
                            <b>Web Components Master</b> - Create Web Components which is used by everyone<br /><br />
                        </p>
                    </Tab>
                    <Tab label="Khushboo" >
                        <p style={{ padding: "10px" }}>
                            <b>React Ninja</b> - Integrated Common Components with React framework<br /><br />
                        </p>
                    </Tab>
                    <Tab label="Amrit" >
                        <p style={{ padding: "10px" }}>
                            <b>Angular Master</b> - Integrated Common Components with Angular framework<br /><br />
                        </p>
                    </Tab>
                </Tabs>
            </section>
        </div>
        <hr />
    </div>
);

export const Integration = () => (
    <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
            <h2>Installation Guide</h2>

            <section>
                <p>
                    This site provides new component that you can use in your web pages and web applications.
                    Using a custom component is as simple as importing it, and using the new tags in your application
                    irrespective of your Javascript frameworks viz Angular JS, Vue JS, React, VanillaJs,  etc.
                </p>
            </section>
        </div>

        <div className="row">
            <section>
                <p>Follow the below steps.</p>
                <ul>
                    <li> Go to dist folder of the WebComponent and run the below command:<br />
                        <code>{"yarn link"}</code>
                    </li>
                    <li> This will register your web component and gives you the below command:<br />
                        <code>{"yarn link web-component"}</code>
                    </li>
                    <li>Copy the above command and run it in your application terminal.
                         This will create your WebComponent folder in your node-modules folder of your project.</li>
                </ul>

                <p>After following the above steps you can try using any web component.</p>
            </section>
        </div>

        <div className="row">
            <section>
                <h5>How Do I Use Web Component:</h5>
                <p>
                    Using a WebComponent is no different to using a <code>{"<div>"}</code> or any other element. <br />
                    Import the component in your index.js or main.js file as mentioned below: <br />
                    <code>{"import from 'web-component'"}</code>
                </p>

                <p>
                    Your component is now ready to use. Try using the below tags in your Login Page to get your Login component:

                    <br /><code>{"<cc-login></cclogin>"}</code><br />
                </p>

                <p>
                    And that's it, you will be able to see the login component in your project.
                    Simple, isnt it?? Now go ahead and try using the other WebComponents and do wonders with.
                </p>
            </section>
        </div>
    </div>
);