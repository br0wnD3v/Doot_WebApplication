import Header from "../Sections/common/Header";
import HomeHero from "../Sections/home/HomeHero";
import HomeFooter from "../Sections/home/HomeFooter";
import { Flex, Box } from "@chakra-ui/react";

export default function HomeLayout() {
  return (
    <>
      <Flex position={"relative"} minH={"100vh"} direction={"column"}>
        <Box
          h={"100%"}
          w={"100%"}
          position={"absolute"}
          top={"0"}
          zIndex={"-1"}
          bgImage={"/static/images/stockBg.jpg"}
          bgSize={"cover"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          direction={"column"}
          style={{
            filter: "brightness(0.2)",
          }}
        />
        <Header />
        <HomeHero />
        <HomeFooter />
      </Flex>
    </>
  );
}
