import styled from "styled-components";
import Inputter from "../components/Input/Inputter";

const PredictionPage = () => {
  const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  `;
  const BoldText = styled.h2`
    font-weight: bold;
    text-align: justify;
  `;

  const Center = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <Container>
        <Center>
          <BoldText>Ini Halaman Prediksi</BoldText>
        </Center>
      </Container>
      <Center>
        <Inputter></Inputter>
      </Center>
    </>
  );
};

export default PredictionPage;

// Please put Prediction Result in this Pages.
