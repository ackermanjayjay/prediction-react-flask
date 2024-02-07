import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
function Inputter() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/api/input',formData)
      .then((response) => {
        console.log("Response from Flask:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nama"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></Input>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Inputter;
