import { Box, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import gif from "./resources/loading.webp";
import { API } from "./backend";
import NotFound from "./404NotFound";

function Redirection({ match }) {
  const {
    params: { shortid },
  } = match;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recLink, setLink] = useState();
  useEffect(() => {
    getlink().then((k) => {
      if (k.error) {
        console.log(k.error);
        setError(true);
      } else {
        setLink(k);
      }
    });
    // eslint-disable-next-line
  }, [error, loading, recLink]);

  const getlink = () => {
    let sid = { shortid: shortid };
    return fetch(`${API}getlink`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sid),
    }).then((response) => {
      let k = response.json();
      console.log(k);
      return k;
    });
  };
  const gotoURL = () => {
    console.log(String(recLink));
    if (recLink !== undefined) {
      window.location = recLink;
      setLoading(false);
    }
  };

  return (
    (loading && !error && (
      <div>
        <Box maxH="100vh" paddingTop="20px">
          <Grid
            h="100vh"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(4, 1fr)"
            width="100%"
          >
            <GridItem colSpan="4" rowSpan={4} bg="white" textAlign="center">
              <Center>
                <Image src={gif} alt="Loading..." objectFit="cover" />
              </Center>
              <Heading marginTop="50px">
                Please Hold While We Are Racing To Your Destination!
              </Heading>
            </GridItem>
          </Grid>
        </Box>
        {gotoURL()}
      </div>
    )) ||
    (error && <NotFound></NotFound>)
  );
}
export default Redirection;
