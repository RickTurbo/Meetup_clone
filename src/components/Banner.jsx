import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Container, Grid, Heading } from "@chakra-ui/layout";

import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import imageOne from "../assets/image-one.jpeg";
import imageTwo from "../assets/image-two.jpeg";
import imageThree from "../assets/image-three.jpeg";
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

      <Container maxW="container.xl" mt={10}>
        <Grid templateColumns="repeat(3,1fr)">
          <Box>
            <Image
              w="100%"
              borderRadius="lg"
              src={imageOne}
              alt="image three"
            />
            <Button colorScheme="teal" variant="link" mt="5">
              新しい友だちを作ろう
            </Button>
          </Box>
          <Box>
            <Image
              w="100%"
              borderRadius="lg"
              src={imageTwo}
              alt="image three"
            />
            <Button colorScheme="teal" variant="link" mt="5">
              アウトドアを極める
            </Button>
          </Box>
          <Box>
            <Image
              w="100%"
              borderRadius="lg"
              src={imageThree}
              alt="image three"
            />
            <Button colorScheme="teal" variant="link" mt="5">
              テクノロジーの力でつながる
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* pills */}
      <Container maxW="container.xl">
        <Box
          direction="row"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          my="10"
        >
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            キャリアアップ
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            禅の心を探す
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            行動に移す
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            言語と文化をシェアする
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            仲間と読書
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            仲間とライティング
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            技術を磨く
          </Badge>
        </Box>
      </Container>

      {/* last header section */}
      <Container maxW="container.xl" mt="20">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Heading as="h3" size="lg" mb="7"></Heading>
            <Box></Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
