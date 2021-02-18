import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormConatiner";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [profession, setProfession] = useState("");

  const data = [name, email, password, phoneNo, profession];

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/login");
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  var obj = JSON.parse(localStorage.getItem("userInfo"));
  console.log(obj);

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
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>phoneNo</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter PhoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="Profession"
              placeholder="Enter Profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Register;
