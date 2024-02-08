import { Input, Button } from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";
import Loading from "./Loading";
import { PostAPiFlask } from "../../services/GetApi";
const ResultPrediction = lazy(() => import("./ResultPrediction"));

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
        ></Input>
        {responseMessage < 0 ? null : (
          <Button type="submit" colorScheme="teal" size="md" mt={5} mb={5}>
            {" "}
            Prediction{" "}
          </Button>
        )}
      </form>
      <Suspense fallback={<Loading />}>
        <ResultPrediction props={responseMessage} />
      </Suspense>
    </div>
  );
}

export default Inputter;
