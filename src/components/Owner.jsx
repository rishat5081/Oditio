import { Stack, Text, Heading, Image, Button } from "@chakra-ui/react";
import owner from "../assets/images/owner.jpg";
import OdittoBackgroundImage from "../assets/images/OdittoBackgroundImage.png";

const Owner = () => {
  return (
    <Stack
      p={{ base: '10' , lg:"20"}}
      margin={"0px !important"}
      width={"100%"}
      height={"100%"}
      backgroundImage={OdittoBackgroundImage}
      backgroundPosition={"center"}
      backgroundSize={'cover'}
      
    >
      <Stack textAlign={"center"} justifyContent={"center"}>
        <Text fontWeight={"bold"} color={"blue"}>
          CHECK HIM OUT
        </Text>
        <Heading>Ron Burkhardt</Heading>
      </Stack>
      <Stack
        pt={"20"}
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
        alignItems={'flex-start'}
      >
        <Stack width={{base:"100%" , lg: '40%' }}>
          <Image height={"420px"} src={owner} />
        </Stack>
        <Stack width={{base:"100%" , lg: '40%' }} spacing={"5"}>
          <Text textAlign={{ base: 'center' , lg: 'justify' }} lineHeight={"2"}>
            Ron Burkhardt is the originator of three genres of contemporary
            American art-Notism, Earth Art and LetterScapes. His work is in
            multiple museums and he has hundreds of distinguished international
            collectors. He studied at the National Academy of Fine Art in New
            York and the Art Students League of New York. Over the years, he has
            won over 200 creative awards and has shown in over 100 exhibitions
            worldwide.
          </Text>
          <Text as={"i"} textAlign={{ base: 'center' , lg: 'justify' }} >
            When visiting our Monaverse Gallery on your computer, please use the
            arrow keys to move your avatar to walk around our gallery.
          </Text>
          <Button
            _selected={{}}
            _hover={{}}
            colorScheme={"blue"}
            color={"white"}
            p={{ base: '0' , lg:"8"}}
            width={'100%'}
          >
            {" "}
            <Text fontWeight={"bold"}>
              {" "}
              Click here to visit Ron Burkhardt's Metaverse Gallery{" "}
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Owner;
