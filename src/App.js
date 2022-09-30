import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
