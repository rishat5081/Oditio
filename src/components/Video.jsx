import { AspectRatio, Stack } from "@chakra-ui/react";

const Video = () => {
  return (
    <Stack width={"100%"} height={"100%"} direction={{ base:'column' , lg:"row"}} justifyContent={'space-evenly'} >
      <Stack p={'4'} >
        <AspectRatio width={{ base: '100%'   , lg:"400px"}} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
      <Stack p={'4'} >
        <AspectRatio  width={{ base: '100%'   , lg:"400px"}} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
    </Stack>
  );
};

export default Video;
