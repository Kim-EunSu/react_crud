import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function Edit() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("http://localhost:3001/employee/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //data를 그대로 받아오기 위해서
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setActive(data.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, name, email, phone, active };

    fetch("http://localhost:3001/employee/" + id, {
      method: "PUT",
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
            onChange={(e) => setEmail(e.target.email)}
          ></Input>
        </Form>
        <Form>
          <Label>Phone</Label>
          <Input
            defaultValue={phone}
            required
            onChange={(e) => setPhone(e.target.phone)}
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

export default Edit;
