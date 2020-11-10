import React from 'react';
import './App.css';
import './Login.js'
import Login from './Login.js';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import {faHospitalUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <div className="app-Background center">
        <div className="container center">
         <div className="container-bordered">
           <FontAwesomeIcon icon={faHospitalUser} size="3x" style={{color: 'whitesmoke'}}></FontAwesomeIcon>
           <h1 className="text-light">Hello There!</h1>
           <p className="text-light">Please enter your login details below:</p>
          <Login></Login>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
