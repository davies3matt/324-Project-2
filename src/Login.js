import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Amplify from 'aws-amplify';
import AWS from 'aws-sdk';
import aws_exports from './aws-exports';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

Amplify.configure(aws_exports);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      Auth.signIn(email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel className='text-light' style={{fontWeight: 'bold'}}>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel className='text-light' style={{fontWeight: 'bold'}}>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit" >
          Login
        </Button>
      </form>
    </div>
  );
}