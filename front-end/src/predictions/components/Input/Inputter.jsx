import { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "../Loader/Loading";
import { PostAPiFlask } from "../../../services/GetApi";

const ResultPrediction = lazy(() =>
  import("../ResultPrediction/ResultPrediction")
);

const Input = styled.input`
  padding: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 100px;
  margin-right: 100px;
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Inputter() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [responseMessage, setResponseMessage] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostAPiFlask(formData)
      .then((response) => {
        setResponseMessage(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {responseMessage < 0 ? null : <Button type="submit">Prediction</Button>}
      </form>
      <Suspense fallback={<Loading />}>
        <ResultPrediction props={responseMessage} />
      </Suspense>
    </div>
  );
}

export default Inputter;
