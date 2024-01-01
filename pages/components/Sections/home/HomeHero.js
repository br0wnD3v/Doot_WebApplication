import {
  Spacer,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  FormControl,
} from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

import axios from "axios";

import { useState, useEffect } from "react";

import { GiAllSeeingEye } from "react-icons/gi";
import { MdOutlineJoinInner } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import InformationCard from "../common/InformationCard";

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function HomeHero() {
  const [asset, setAsset] = useState("Select asset");
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState("res");

  const [firstRender, setFirstRender] = useState(false);

  console.log(asset);

  useEffect(() => {
    setFirstRender(true);
  }, []);

  const blinking = keyframes`
  50% {
    opacity: 0;
  }
  `;
  const assets = ["Mina", "Ethereum", "Bitcoin  ", "Chainlink", "Solana"];

  const handleSubmit = async () => {
    try {
      const key = process.env.NEXT_PUBLIC_API_INTERFACE_KEY;
      console.log(key);
      const headers = {
        Authorization: "Bearer " + key,
      };
      const response = await axios.get(
        `/api/get/getPriceInterface?token=${asset}`,
        {
          headers: headers,
        }
      );
      console.log(response.data);
      const finalString = await formatString(response.data);
      setResult(finalString);
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };

  // const handleAssetChange = (event) => {
  //   setAsset(event.target.value);
  // };
  async function formatString(obj) {
    if (obj == null || obj == undefined) return "";

    var formattedString = "";
    formattedString += `<span style='color:yellow;'>{</span><br>`;

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      console.log(key, value);
      formattedString += `&nbsp;&nbsp;&nbsp;&nbsp;${key}:<span style='color:orange;'>${value}</span>,<br>`;
    });
    formattedString += `<span style='color:yellow;'>}</span>`;

    console.log(formattedString);
    return formattedString;
  }

  return (
    <>
      {/* Opening */}
      <Flex
        direction={"column"}
        maxW={"100%"}
        gap={10}
        p={10}
        mb={10}
        align={"center"}
      >
        <Heading
          fontFamily={"Montserrat Variable"}
          size={"4xl"}
          textAlign={"center"}
        >
          Supercharged Oracle For The Mina Protocol
        </Heading>
        <Text
          fontFamily={"Source Code Pro Variable"}
          fontSize={"2xl"}
          width={"100%"}
          textAlign={"center"}
        >
          <Box as={"span"} color={"#6c35de"} fontSize={"3xl"} fontWeight={800}>
            Verifiable, Transparent.
          </Box>
          <br />
          That's how we like our data feeds for the Mina Protocol.
        </Text>

        <Button
          alignItems={"center"}
          justifyItems={"center"}
          p={"5px 30px"}
          borderRadius={20}
          gap={2}
          transition={"0.2s"}
          _hover={{ gap: "5" }}
          background={
            "linear-gradient(100.5deg, rgb(148, 146, 236) 17.7%, rgb(245, 194, 194) 76.1%);"
          }
          fontFamily={"Montserrat Variable"}
        >
          <Text letterSpacing={1}>TRY DOOT</Text>
          <FaArrowRightLong />
        </Button>
      </Flex>
      {/* Features */}
      <Flex direction={"column"} mt={120} align={"center"}>
        <Heading size={"lg"} fontFamily={"Source Code Pro Variable"}>
          for@developers:~${" "}
          <Box
            animation={`${blinking} 1.2s step-start infinite`}
            display={"inline "}
          >
            _
          </Box>
        </Heading>
        <Text fontSize={"xl"} fontFamily={"Source Code Pro Variable"}>
          Who prioritize transparency, accuracy and verifiability.
        </Text>

        <Flex
          direction={"row"}
          padding={"50px 180px"}
          gap={5}
          // on
          // animation={`${slideIn} 1s ease-in-out forwards`}
        >
          <InformationCard>
            <GiAllSeeingEye size={100} />
            <Heading textAlign={"center"} fontFamily={"Montserrat Variable"}>
              Asset Prices
            </Heading>
            <Text fontSize={20} textAlign={"center"}>
              Comprehensive Mina-compatible price reference feeds encompassing
              over 10 assets, currently operational on Berkeley Testnet,
              ensuring availability and thorough testing for robustness.
            </Text>
          </InformationCard>
          <Spacer />
          <InformationCard>
            <MdOutlineJoinInner size={100} />
            <Heading textAlign={"center"} fontFamily={"Montserrat Variable"}>
              Aggregated
            </Heading>
            <Text fontSize={20} textAlign={"center"}>
              Pooling insights from diverse sources, our curated aggregation
              method ensures a precise, unadulterated stream of information.
              This allows us to leave no room for manipulation or failure.
            </Text>
          </InformationCard>
          <Spacer />
          <InformationCard>
            <MdOutlineCleaningServices size={100} />
            <Heading textAlign={"center"} fontFamily={"Montserrat Variable"}>
              Filtered
            </Heading>
            <Text fontSize={20} textAlign={"center"}>
              We meticulously eliminate outliers to extract the authentic value,
              ensuring a signal devoid of disruptive noise that might otherwise
              yield inaccurate outcomes.
            </Text>
          </InformationCard>
        </Flex>
      </Flex>
      {/* Testing  */}
      <Flex direction={"column"} alignItems={"left"}>
        <Flex ml={200} mt={200} direction={"row"} align={"center"} gap={5}>
          <Box
            background={
              "linear-gradient(90deg, #6c35de 0%,rgba(23,0,44,1) 100%)"
            }
            w={200}
            h={5}
          ></Box>
          <Heading
            letterSpacing={2}
            size={"3xl"}
            fontFamily={"montserrat  Variable"}
          >
            TEST DOOT
          </Heading>
        </Flex>{" "}
        <Heading
          letterSpacing={2}
          size={"3xl"}
          fontFamily={"montserrat Variable"}
          ml={200}
        >
          DATA FEEDS
        </Heading>
      </Flex>
      <Flex
        direction={"row"}
        align={"center"}
        justify={"center"}
        mt={50}
        gap={5}
      >
        {/* Input Window  */}
        <Flex
          background={"linear-gradient(120deg,#2c0055 0%, #5126a9 100%)"}
          direction={"column"}
          borderRadius={10}
          p={5}
          minH={400}
          w={"22%"}
          pos={"relative"}
        >
          <Text fontSize={25}>Choose the asset and run the data feed.</Text>

          <FormControl
            fontFamily={"Source Code Pro Variable"}
            mt={5}
            position={"relative"}
          >
            <AutoComplete
              openOnFocus
              value={asset}
              onChange={(e) => setAsset(e)}
            >
              <Box
                position={"absolute"}
                top={0}
                left={0}
                borderRadius={10}
                backgroundColor={"white"}
                h={10}
                w={"100%"}
              ></Box>
              <AutoCompleteInput
                w={"100%"}
                variant="filled"
                placeholder="Select Asset"
                color={"black"}
              />
              <AutoCompleteList>
                {assets.map((asset, cid) => (
                  <AutoCompleteItem
                    key={`option-${cid}`}
                    value={asset}
                    color={"black"}
                    textTransform="capitalize"
                  >
                    {asset}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>

          <Button
            colorScheme="orange"
            position="absolute"
            bottom={5}
            onClick={handleSubmit}
            fontFamily={"Source Code Pro Variable"}
          >
            RUN REQUEST
          </Button>
        </Flex>
        {/* Result Window */}
        <Flex
          direction={"column"}
          h={400}
          w={"50%"}
          fontFamily={"Source Code Pro Variable"}
        >
          <Flex
            gap={2}
            background={
              "linear-gradient(190deg, rgba(23,0,44,1) 0%, #5126a9 100%)"
            }
            p={3}
            borderTopRadius={10}
          >
            <Box
              borderRadius={"50%"}
              boxSize={3}
              backgroundColor={"green.300"}
            ></Box>
            <Box
              borderRadius={"50%"}
              boxSize={3}
              backgroundColor={"orange"}
            ></Box>
            <Box borderRadius={"50%"} boxSize={3} backgroundColor={"red"}></Box>
          </Flex>

          <Flex
            backgroundColor="#2c0055"
            borderBottomRadius={10}
            p="0 20px 20px 20px"
            h={"100%"}
          >
            <Flex
              maxW={"100%"}
              borderRadius={10}
              backgroundColor={"#3f007a"}
              direction={"column"}
              w={"100%"}
            >
              <Flex
                direction={"row"}
                borderBottom={"2px solid white"}
                p={5}
                pt={7}
                pl={5}
                gap={20}
                ml={10}
                mr={10}
              >
                <Box
                  cursor={"pointer"}
                  onClick={() => {
                    setMode("res");
                  }}
                  fontWeight={mode == "res" ? 700 : 500}
                >
                  Response
                </Box>
                <Box
                  cursor={"pointer"}
                  onClick={() => {
                    setMode("req");
                  }}
                  fontWeight={mode == "req" ? 700 : 500}
                >
                  API Endpoint
                </Box>
              </Flex>
              <Flex p={10} fontWeight={800}>
                <Text
                  maxW={"100%"}
                  hidden={mode == "req"}
                  dangerouslySetInnerHTML={{
                    __html: result,
                  }}
                ></Text>
                <Text maxW={"100%"} hidden={mode == "res"}>
                  {`https://doot.foundation/api/get/getPrice?token=${asset}`}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
