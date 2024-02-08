import { Text, Center, Stack } from "@chakra-ui/react";
import Inputter from "../components/Inputter";
import { GetAPiFlask } from "../../services/GetApi";
import { useState, useEffect } from "react";
import AboutWords from "./AboutWords";
import ProfileWords from "./ProfileWords";

function Home() {
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
      <ProfileWords />
      <Center mt={5} mb={5} mx={5}>
        <Stack spacing={3}>
          <Text fontWeight="bold" textAlign="justify">
            {" "}
            Prediction Sentiment Words{" "}
          </Text>
          <Text fontWeight="bold" textAlign="justify">
            {data.message}
          </Text>
        </Stack>
      </Center>
      <Inputter></Inputter>
      <AboutWords />
    </>
  );
}
export default Home;
