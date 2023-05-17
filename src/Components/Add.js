import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Asset from "./Assets";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Add = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();

    let uniqueId = ids.slice(0, 8);

    let a = type,
      b = name;
    Asset.push({ id: uniqueId, Type: a, Name: b });
    history("/");
  };

  return (
    <div>
      <Form className="d-grade gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formname">
          <Form.Control
            type="text"
            placeholder="Enter Type"
            required
            onChange={(e) => setType(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formname">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Add;
