import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Link,
} from "@chakra-ui/layout";
import Popularimage from "../assets/popular-image.jpeg";
import React from "react";

function Popular() {
  return (
    <Box mt={20}>
      <Container maxW="container.xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading alignItems="center" as="h3" size="lg" mb="6">
              人気のグループ
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal.500">
              もっとグループを探す
            </Link>
          </Box>
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(3. 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3,1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap="6"
        >
          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            w="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="black" size="md">
                JOY TENNIS TOKYO
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {" "}
              2021年11月06日9:00 JST
            </Box>
            <Box color="#212121" fontWeight="bold">
              JOY TENNIS TOKYO weekend tennis practice for beginner at Maginu
            </Box>
          </Box>
          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            w="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="black" size="md">
                JOY TENNIS TOKYO
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {" "}
              2021年11月06日9:00 JST
            </Box>
            <Box color="#212121" fontWeight="bold">
              JOY TENNIS TOKYO weekend tennis practice for beginner at Maginu
            </Box>
          </Box>
          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            w="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="black" size="md">
                JOY TENNIS TOKYO
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {" "}
              2021年11月06日9:00 JST
            </Box>
            <Box color="#212121" fontWeight="bold">
              JOY TENNIS TOKYO weekend tennis practice for beginner at Maginu
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Popular;
