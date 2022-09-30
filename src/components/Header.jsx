import { Stack, Image, Text, Button } from "@chakra-ui/react";
import OdittoLogos from "../assets/images/OdittoLogos.png";

const Header = () => {
  return (
    <Stack
      p="3"
      maxHeight={"100px"}
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
    >
      <Stack></Stack>
        <Stack>
          <Image _hover={{ cursor: "pointer" }} w="36" src={OdittoLogos} />
        </Stack>
        <Stack>
          <Button colorScheme={"blue"}>Connect Wallet</Button>
        </Stack>
    </Stack>
  );
};

export default Header;
