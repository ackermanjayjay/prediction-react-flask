import { useState, useEffect } from "react";
import styled from "styled-components";
import Inputter from "../components/Input/Inputter";
import { GetAPiFlask } from "../../services/GetApi";

const Home = () => {
  const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  `;

  const BoldText = styled.h2`
    font-weight: bold;
    text-align: justify;
  `;
  const [data, setData] = useState({});

  useEffect(() => {
    GetAPiFlask()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      <Container>
        <div>
          <BoldText>Prediction Sentiment Words</BoldText>
          <BoldText>{data.message}</BoldText>
        </div>
      </Container>
      <Inputter />
    </>
  );
};

export default Home;
