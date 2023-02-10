import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button``;

function Detail() {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/employee/" + id)
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
    <div>
      {data && (
        <>
          <h3>The Employee name is: {data.name}</h3>
          <h3>Contact Details</h3>
          <h3>Email is: {data.email}</h3>
          <h3>Phone is: {data.phone}</h3>
          <Btn>
            <Link to="/">Back</Link>
          </Btn>
        </>
      )}
    </div>
  );
}

export default Detail;
