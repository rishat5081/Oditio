import { Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import NftsCollection from "../components/NftsCollection";
import Owner from "../components/Owner";
import Video from "../components/Video";
import WidgetContainer from "../components/WidgetContainer";

const LandingPage = () => {
  return (
    <Stack>
      <Header />
      <WidgetContainer />
      <Owner/>
      <Video/>
      <NftsCollection/>
    </Stack>
  );
};

export default LandingPage;
