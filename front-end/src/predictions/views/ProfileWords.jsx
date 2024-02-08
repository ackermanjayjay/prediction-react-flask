import { Flex, Grid, Text, Image, Stack } from "@chakra-ui/react";

function ProfileWords() {
  return (
    <>
      <Flex justify={"start"} mx={5}>
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
          <Text textAlign={"justify"} fontWeight="bold">
            Indonesian RoBERTa Base Sentiment Classifier lore + React Js
          </Text>
          <Text textAlign={"justify"}>
            Indonesian RoBERTa Base Sentiment Classifier is a
            sentiment-text-classification model based on the RoBERTa model. The
            Author made With Pytorch And Python
          </Text>
          <Text textAlign={"justify"}>
            So Muhammad Reza Made App with Huggingface when Author Indoenesian
            RoBERTa Uploading model in huggingFace
          </Text>
          <Text textAlign={"justify"}>
            Made with Flask as a restful API and react js as a front-end
          </Text>
          <Stack direction="row" spacing={2} mt={5}>
            <Text> Created by@ Muhammad Reza</Text>
            <Image
              src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
              width="50px"
              height="50px"
              alt="Pytorch logo"
            />
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              width="50px"
              height="50px"
              alt="Python logo"
            />
          </Stack>
        </Grid>
      </Flex>
    </>
  );
}
export default ProfileWords;
