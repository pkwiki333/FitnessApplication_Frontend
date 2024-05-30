import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import errorPicture3 from "./images/error3.png";
import homer from "./images/homer.png";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box bgColor={"gray.400"}>
      <HStack>
        <Image src={errorPicture3} alt="error" />
        <VStack fontSize={50}>
          <h1>Page nog found</h1>
          <p>Press the button to go back</p>
          <Image src={homer} alt="" w={100} mb={0} />
          <Button
            onClick={() => {
              navigate("/");
            }}
            bg={"#1C971A"}
            color={"white"}
            size={50}
            padding="10px"
            borderRadius={15}
            mt={0}
          >
            Back
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}
