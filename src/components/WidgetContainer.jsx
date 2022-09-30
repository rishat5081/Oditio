import { Stack, Image } from "@chakra-ui/react";
import OdittoHeaderImage from "../assets/images/OdittoHeaderImage.jpg";

const WidgetContainer = () => {
  return (
    <Stack margin={'0px !important'}>
      <Image minW={'100%'} width={"100%"} src={OdittoHeaderImage} />
    </Stack>
  );
};

export default WidgetContainer;
