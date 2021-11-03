import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, Heading } from "@chakra-ui/layout";

import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
// import imageOne from '../assets/image-one.jpg';
// import imageTwo from '../assets/image-two.jpg';
// import imageThree from '../assets/image-three.jpg';
// import rightArrow from '../assets/right-arrow.svg';

function Banner() {
  return (
    <>
      <header>
        <Box
          d="flex"
          align-Items="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Box>
            <Image boxSize="90px" src={brandLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Log in
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Sign up
            </Button>
          </Box>
        </Box>
      </header>

      <Box>
        {/* main punch text */}
        <Container maxW="container.xl">
          <Box d="flex" alignItems="center" py="20" flexDirection="row">
            <Box>
              <Heading>
                <Box>
                  今すぐはじめましょう。Meetupではたくさんのことが待っています。
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                グループにジョインして、人々に出合い、友達を作り、サポートを見つけ、ビジネスを成長させ、あなたの趣味や興味をもっと充実させましょう。毎日何千ものオンラインイベント、対面イベントが開催されています。
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* three boxes */}

      <Container maxW='container.xl' mt={10}>
      <Grid templateColumns='repeat(3,1fr)'>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Grid>
      </Container>
    </>
  );
}

export default Banner;
