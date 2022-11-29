import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import gif from "./resources/404.webp";

export default function NotFound() {
  return (
    <div>
      <Box maxH="100vh">
        <Grid
          h="100vh"
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(4, 1fr)"
          width="100%"
        >
          <GridItem colSpan="4" rowSpan={4} bg="white" textAlign="center">
            <Center>
              <Image src={gif} alt="404 Not Found" objectFit="cover" />
            </Center>
            <Heading marginTop="50px">THIS PLACE DOES NOT EXIST!!</Heading>
            <Heading size="md">Please Check your short URL.</Heading>
            <Heading size="md">We are very sensitive to case :)</Heading>
            <Heading marginTop="30px">Go To Our</Heading>
            <Heading>
              <Link href="/" security="" color="blue.500">
                <Text bg="blue">HOMEPAGE</Text>
              </Link>
            </Heading>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
