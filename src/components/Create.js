import React from "react";
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

const Label = styled.div``;
const Input = styled.input``;

function Create() {
  return (
    <Wrapper>
      <Title>Employee Create</Title>
      <FormGroup>
        <Label>Id</Label>
        <Input></Input>
      </FormGroup>
    </Wrapper>
  );
}

export default Create;
