import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./routes/Employee";
import Create from "./components/Create";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2.5rem;
  padding: 1rem 0;
`;

function App() {
  return (
    <>
      <Title>React JS CRUD Operation</Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/employee/detail/:id" element={<Detail />} />
          <Route path="/employee/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
