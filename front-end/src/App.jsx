import { Box, ChakraProvider } from "@chakra-ui/react";
import Home from "./predictions/views/HomePages";
import NavigationBar from "./predictions/components/NavigationBar";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box boxShadow="dark-lg"  mb={5} gap={5}>
          <NavigationBar></NavigationBar>
        </Box>
          <Home></Home>
      </ChakraProvider>
    </>
  );
}

export default App;
