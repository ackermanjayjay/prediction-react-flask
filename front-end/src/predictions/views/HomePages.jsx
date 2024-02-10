import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetAPiFlask } from "../../services/GetApi";

const Home = () => {
  const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  `;

  const BoldText = styled.h2`
    font-weight: bold;
    text-align: justify;
  `;
  const Text = styled.p`
    text-align: justify;
    text-weight = normal;
    tab-size = 1.5;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 50px;
    margin-top: 50px;
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
          <Grid>
            <div>
              {/* Put here content give some What thats meanIn indonesian Roberta Classifier */}
              <Text>
              Indonesian RoBERTa Base Sentiment Classifier is a sentiment-text-classification model based on the RoBERTa model. The model was originally the pre-trained Indonesian RoBERTa Base model, which is then fine-tuned on indonlus SmSA dataset consisting of Indonesian comments and reviews.
              </Text>
            </div>
            <div>
              {/* Put here content give some What thats meanIn indonesian Roberta Classifier */}
              <Text>
              After training, the model achieved an evaluation accuracy of 94.36% and F1-macro of 92.42%. On the benchmark test set, the model achieved an accuracy of 93.2% and F1-macro of 91.02%.
              </Text>
            </div>
            <div>
              {/* Put here content give some What thats meanIn indonesian Roberta Classifier */}
              <Text>
              Hugging Faces Trainer class from the Transformers library was used to train the model. PyTorch was used as the backend framework during training, but the model remains compatible with other frameworks nonetheless.
              </Text>
            </div>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Home;
