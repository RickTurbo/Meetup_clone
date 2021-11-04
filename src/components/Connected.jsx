import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading } from "@chakra-ui/layout";

import deviceLeft from "../assets/device-left.webp";
import meetupLogo from "../assets/meetup-logo.svg";
import deviceRight from "../assets/device-right.webp";

// import androidPastored from "../assets/android-app-download.svg";
// import iosPastored from "../assets/ios-app-download.svg";

function Connected() {
  return (
    <Box my="20">
      <Container maxW="container.xl">
        <Box
          display="flex"
          pos="relative"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="block">
            <Image w="260px" src={deviceLeft}></Image>
          </Box>

          <Box pos="relative" mx="auto" align="center">
            <Image w="80px" left="0" src={meetupLogo}></Image>
            <Heading as="h6" size="md" my="7">
              Stay connected. <br /> Download the app.
            </Heading>
            {/* <Box d="flex">
              <Image w="180px" p="5" src={androidPastored}></Image>
              <Image w="180px" p="5" src={iosPastored}></Image>
            </Box>  */}
          </Box>
          <Box d='block'>
            <Image w="260px" right="0" src={deviceRight}></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Connected;
