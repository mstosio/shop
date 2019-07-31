import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Nav = () => (
  <Navbar className="bg-light justify-content-between">
    <Form inline>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form>
    <Form inline>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      <Button type="submit">Submit</Button>
    </Form>
  </Navbar>
);

export default Nav;
