import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'capita-web-components/src/main';

function App() {
return (
    <div>
        <cc-login

forgot="https://www.capita.com/"

signup="https://www.capita.com/"

login="https://www.capita.com/" />
        <cc-modal/>
        <cc-progress-bar complete={10}/>

    </div>
);
}

export default App;