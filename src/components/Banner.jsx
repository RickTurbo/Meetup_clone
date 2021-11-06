import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Container, Grid, Heading } from "@chakra-ui/layout";

import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import imageOne from "../assets/image-one.jpeg";
import imageTwo from "../assets/image-two.jpeg";
import imageThree from "../assets/image-three.jpeg";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

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
          <Box
            d="flex"
            alignItems="center"
            py="20"
            flexDirection={{
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              base: "column",
            }}
          >
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
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={6}
        >
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
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <Box>
            <Heading as="h3" size="lg" mb="7">
              どんなことをしてみたいですか？
            </Heading>
            <Box
              d="flex"
              alignItems="center"
              flexDirection={{
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
                base: "column",
              }}
              w="100%"
            >
              <Box
                flexBasis={{
                  sm: "100%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                  base: "100%",
                }}
                w="100%"
                mr={{
                  sm: "0",
                  md: "2",
                  lg: "2",
                  xl: "2",
                  base: "0",
                }}
              >
                <FormControl>
                  <Box pos="relative">
                    <Input
                      pl={8}
                      placeholder="「テニス」を検索する"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#d9d9d9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box flexBasis="50%" ml="2">
                <FormControl id="email">
                  <Box pos="relative">
                    <Input pl={"8"} placeholder="会場" type="text" />
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#d9d9d9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Box>
            <Button
              _hover={{ opacity: "0.8" }}
              mt="5"
              pt="6"
              pb="6"
              w="100%"
              color="#ffffff"
              bg="red.500"
              fontSize="lg"
            >
              <Box fontWeight="black">検索</Box>
            </Button>
          </Box>
          <Box>
            <Box>
              <Heading
                as="h3"
                size="lg"
                mb="7"
                display={{
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  base: "none",
                }}
              >
                新しい情報をチェックする
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  まもなく開催
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  今日
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  明日
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  今週
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  オンライン
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  対面
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  お近くで人気
                </Badge>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
