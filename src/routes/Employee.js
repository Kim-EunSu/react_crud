import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Add = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 7px;
  margin: 0.4rem;
  color: white;
  background-color: #ff5050;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, auto));
`;

const Thead = styled.p`
  color: white;
  padding: 0.5rem 0;
  text-align: center;
  background-color: #0f1e49;
  border-right: 1px solid white;
`;

const TBody = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.5rem 0;
  text-align: center;
`;

const Btn = styled.button`
  border: none;
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
  border-radius: 7px;
  &:first-child {
    background-color: #ff5050;
  }
  &:nth-child(2) {
    background-color: #6262ff;
  }
  &:last-child {
    background-color: #7ba57b;
  }
`;

function Employee() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const EditBtn = (id) => {
    navigate("employee/edit/" + id);
  };

  const RemoveBtn = (id) => {
    if (window.confirm("Do you want remove?")) {
      fetch("http://localhost:3001/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Remove Success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const DetailBtn = (id) => {
    navigate("employee/detail/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:3001/employee")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Employee Listing</Title>
      <Add>
        <Link to="/employee/create">Add New(+)</Link>
      </Add>
      <Table>
        <Thead>Id</Thead>
        <Thead>Name</Thead>
        <Thead>Email</Thead>
        <Thead>Phone</Thead>
        <Thead>Action</Thead>
        {/* 데이터 바인딩하기*/}
        <>
          {data &&
            data.map((data) => (
              <>
                <TBody>{data.id}</TBody>
                <TBody>{data.name}</TBody>
                <TBody>{data.email}</TBody>
                <TBody>{data.phone}</TBody>
                <TBody>
                  <Btn
                    onClick={() => {
                      EditBtn(data.id);
                    }}
                  >
                    Edit
                  </Btn>
                  <Btn
                    onClick={() => {
                      RemoveBtn(data.id);
                    }}
                  >
                    Remove
                  </Btn>
                  <Btn
                    onClick={() => {
                      DetailBtn(data.id);
                    }}
                  >
                    Details
                  </Btn>
                </TBody>
              </>
            ))}
        </>
      </Table>
    </Wrapper>
  );
}

export default Employee;
