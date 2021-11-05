import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Banner from "./components/Banner";
import Connected from "./components/Connected";
import Footerbottom from "./components/FooterBottom";
import ItWorks from "./components/ItWorks";
import Popular from "./components/Popular";
import Stories from "./components/Stories";
import UpcomingMeets from "./components/Upcomming";
import imageBg from "./assets/bg.svg";

function App() {
  return (
    <>
      <Box position="absolute" left="0" right="0">
        <Banner />
        <ItWorks />
        <UpcomingMeets />
        <Popular />
        <Connected />
        <Stories />
        <Footerbottom />
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" size="300" src={imageBg} />
      </Box>
    </>
  );
}

export default App;
