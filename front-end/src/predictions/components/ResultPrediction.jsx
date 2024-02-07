import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Center,
  Stack,
} from "@chakra-ui/react";

function ResultPrediction({ props }) {
  return (
    <div>
      {props < 0 ? null : (
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Prediction</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {props.Kalimat != null && props.hasil != null ? (
                <Center gap={5} padding={5} mx={5}>
                  <Stack spacing={3}>
                    {props.hasil == "negative" ? (
                      <Text color="tomato" fontSize="2xl">
                        {props.hasil}
                      </Text>
                    ) : (
                      <Text color="teal" fontSize="2xl">
                        {props.hasil}
                      </Text>
                    )}
                    <Text fontSize="2xl">{props.Kalimat}</Text>
                    <Text fontSize="2xl">{props.score * 100}</Text>
                  </Stack>
                </Center>
              ) : null}
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </div>
  );
}
export default ResultPrediction;
