import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #dcdcdc;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem 0;
`;

const FormGroup = styled.form``;

const Form = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.div``;
const Input = styled.input`
  min-width: 300px;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Btn = styled.button`
  border: none;
  padding: 0.5rem;
  margin-right: 10px;
  border-radius: 7px;
  &:first-child {
    background-color: #ff7474;
  }
  &:last-child {
    background-color: #a5bda5;
  }
`;

function Create() {
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, active };

    fetch("http://localhost:3001/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Saved Success");
        navigate("/"); // 데이터를 추가 한후 앞 페이지를 이동해야지 눈앞에 보이는것!!
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Wrapper>
      <Title>Employee Create</Title>
      <FormGroup onSubmit={handleSubmit}>
        <Form>
          <Label>Id</Label>
          <Input defaultValue={Id} disabled></Input>
        </Form>
        <Form>
          <Label>Name</Label>
          <Input
            defaultValue={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </Form>
        <Form>
          <Label>Email</Label>
          <Input
            defaultValue={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Form>
        <Form>
          <Label>Phone</Label>
          <Input
            defaultValue={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
        </Form>
        <Form>
          <Label>IsActive</Label>
          <Input
            type="checkbox"
            defaultValue={active}
            onChange={(e) => setActive(e.target.checked)}
          ></Input>
        </Form>
        <BtnWrap>
          <Btn type="submit">Save</Btn>
          <Btn>
            <Link to="/">Back</Link>
          </Btn>
        </BtnWrap>
      </FormGroup>
    </Wrapper>
  );
}

export default Create;
