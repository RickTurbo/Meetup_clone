import React from "react";

import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, Heading, Link } from "@chakra-ui/layout";
import joinGroup from "../assets/joinagroup.svg";
import ticket from "../assets/ticket.svg";
import startGroup from "../assets/start-group.svg";
import { Button } from "@chakra-ui/button";

function ItWorks() {
  return (
    <Box>
      <Container maxWidth="container.xl" my="20">
        <Heading align="center" as="h3" size="lg" pb="2">
          Meetupのしくみ
        </Heading>
        <Box align="center" maxW="700px" mx="auto" pb="10">
          オンラインおよび対面のイベントを通じて、興味/トピックの合う友人を見つけましょう。アカウントは無料で作成できます。
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={joinGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb="4">
                  グループにジョインする
                </Box>
              </Link>
            </Heading>
            <p>
              同じ趣味や興味を愛する仲間と出会い、あなたにぴったりのコミュニティを見つけて、絆を深めていきましょう。
            </p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={ticket} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb="4">
                  イベントを探す
                </Box>
              </Link>
            </Heading>
            <p>
              オンラインゲーム、写真撮影、ヨガやハイキングなど、あらゆるトピックをテーマにしたイベントが見つかります。
            </p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={startGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb="4">
                  グループを見つける
                </Box>
              </Link>
            </Heading>
            <p>共通の趣味を持つ仲間を集めるのに、専門的知識はいりません。</p>
          </Box>
        </Grid>

        <Box>
          <Box align="center" mt="16">
            <Button
              _hover={{ opacity: "0.8" }}
              bg="blue.100"
              color="#ffffff"
              fontWeight="normal"
              size="md"
            >
              Meetupに登録する
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ItWorks;
