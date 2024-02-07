import { Input, Button, Center } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import axios from "axios";
import ResultPrediction from "./ResultPrediction";
import Loading from "./Loading";
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
    axios
      .post("http://127.0.0.1:5000/api/input", formData)
      .then((response) => {
        setResponseMessage(response.data);
      })
      .catch((error) => {
        throw error
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
        ></Input>
        <Center>
          {responseMessage < 0 ? null : (
            <Button type="submit" colorScheme="teal" size="md" mt={5} mb={5}>
              {" "}
              Prediction{" "}
            </Button>
          )}
        </Center>
      </form>
      <Suspense fallback={<Loading />}>
        <ResultPrediction props={responseMessage} />
      </Suspense>
    </div>
  );
}

export default Inputter;
