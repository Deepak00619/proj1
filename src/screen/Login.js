import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormConatiner";

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    var obj = JSON.parse(localStorage.getItem("userInfo"));
    if(obj!==null){
    if (obj[0] === name && obj[2] === password) {
      history.push("/api");
    } else {
      //console.log('Invalid creditionals')
      window.alert("invalid credentials");
    }
  }else{
    window.alert("Please Register first")
    history.push('/')
  }
  };


  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Login;
