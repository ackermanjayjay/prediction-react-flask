import styled from "styled-components";

function ResultPrediction({ props }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  `;

  const TabContainer = styled.div`
    width: 100%;
  `;

  const TabHeader = styled.div`
    display: flex;
    justify-content: center;
    background-color: #edf2f7;
    padding: 10px;
  `;

  const TabContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
  `;

  const Text = styled.p`
    font-size: 2rem;
  `;
  // Ensure props exist and are valid
  if (!props || typeof props !== "object") {
    return null;
  }

  const { Kalimat, hasil, score } = props;

  if (hasil === undefined || Kalimat === undefined || score === undefined) {
    return null;
  }

  // Render the component
  return (
    <Container>
      {props >= 0 && (
        <TabContainer>
          <TabHeader>
            <div>Prediction</div>
          </TabHeader>
          <TabContent>
            {Kalimat != null && hasil != null && (
              <div>
                <Text
                  style={{
                    color: hasil === "negative" ? "tomato" : "teal",
                  }}
                >
                  {hasil}
                </Text>
                <Text>{Kalimat}</Text>
                <Text>{score * 100}</Text>
              </div>
            )}
          </TabContent>
        </TabContainer>
      )}
    </Container>
  );
}

export default ResultPrediction;
