import { Center, Stack, Text } from "@chakra-ui/react";
import Inputter from "../components/Inputter";
import { GetAPiFlask } from "../../services/GetApi";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    GetAPiFlask()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        throw error
      });
  }, []);
  return (
    <>
      <Center bg="tomato" h="100px" w="100%" color="white" mt={5} mb={5} mx={5}>
        <Text fontWeight={"bold"}> Prediction Sentiment Words </Text>
      </Center>

      <Center>
        <Text>{data.message}</Text>
      </Center>

      <Center mt={5} mb={5} mx={5}>
        <Stack spacing={3}>
          <Inputter></Inputter>
        </Stack>
      </Center>
    </>
  );
}
export default Home;
