import { Flex, Grid, Text, Image, Stack} from "@chakra-ui/react";

function AboutWords() {
  return (
    <>
      <Flex justify={"start"} mx={5}>
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
          <Text textAlign={"justify"} fontWeight="bold">
            Indonesian RoBERTa Base Sentiment Classifier lore
          </Text>
          <Text textAlign={"justify"}>
            Indonesian RoBERTa Base Sentiment Classifier is a
            sentiment-text-classification model based on the RoBERTa model. The
            model was originally the pre-trained Indonesian RoBERTa Base model,
            which is then fine-tuned on indonlus SmSA dataset consisting of
            Indonesian comments and reviews.
          </Text>
          <Text textAlign={"justify"}>
            After training, the model achieved an evaluation accuracy of 94.36%
            and F1-macro of 92.42%. On the benchmark test set, the model
            achieved an accuracy of 93.2% and F1-macro of 91.02%.
          </Text>
          <Text textAlign={"justify"}>
            Hugging Faces Trainer class from the Transformers library was used
            to train the model. PyTorch was used as the backend framework during
            training, but the model remains compatible with other frameworks
            nonetheless.
          </Text>
          <Stack direction="row" spacing={2} mt={5}>
            <Text> Created by@ Wilson Wongso</Text>
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
export default AboutWords;
