import { ChakraProvider } from '@chakra-ui/react'
import Home from './predictions/views/HomePages'

function App() {

  return (
    <>
   <ChakraProvider>
    <Home></Home>
   </ChakraProvider>
    </>
  )
}

export default App
