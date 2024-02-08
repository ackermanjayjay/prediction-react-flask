import { Box, ButtonGroup, Image } from "@chakra-ui/react";
import logo from "/src/assets/react.svg";
function NavigationBar() {
  return (
    <>
      <ButtonGroup
        variant="outline"
        spacing="3"
        mx={5}
        mt={5}
        mb={5}
        rounded={"md"}
      >
          <Image
            borderRadius="full"
            boxSize="10px"
            width="50px"
            height="50px"
            src={logo}
            alt="react Logo"
            mt={3.5}
          />
          <Box as="button" borderRadius="lg" px={4} width="50%">
            Home
          </Box>
          <Box as="button" borderRadius="lg" color="black" px={4} width="50%">
            Prediction
          </Box>
      </ButtonGroup>
    </>
  );
}
export default NavigationBar;
