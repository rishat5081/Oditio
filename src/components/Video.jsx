import { AspectRatio, Stack } from "@chakra-ui/react";

const Video = () => {
  return (
    <Stack width={"100%"} height={"100%"} direction={"row"} justifyContent={'space-evenly'} >
      <Stack borderRadius={'10%'} >
        <AspectRatio width="400px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
      <Stack borderRadius={'10%'} >
        <AspectRatio width="400px" ratio={1}>
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
