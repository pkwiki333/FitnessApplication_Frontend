import { Box, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

export default function Exercise({
  id,
  name,
  howTo,
  musclegroup,
  equipment,
  img,
}) {
  const navigate = useNavigate();
  const baseUrlImages = process.env.REACT_APP_BASEURL_IMAGES;

  return (
    <Box ml={50} mr={50} key={id}>
      <HStack>
        <Box
          border="2px"
          minW={"500px"}
          borderRadius={15}
          borderColor={"#1C971A"}
          bgColor={"white"}
          w={2500}
          onClick={() => {
            navigate(`/exercise_info/${id}`, { replace: true });
          }}
        >
          <HStack justifyContent={"space-between"}>
            <HStack m={10}>
              <img src={baseUrlImages + img} alt={name} width="200px" />
              <div>
                <Box fontSize={25} ml="100px">
                  <h1>
                    <strong>{name}</strong>
                  </h1>
                </Box>
                <Box ml="100px">
                  <p>Muscle group: </p>{" "}
                  <div>
                    <ul>{musclegroup.map((item) => item.name + ", ")}</ul>{" "}
                  </div>
                  <br />
                  <p>Equipment:</p>
                  <div>
                    <ul>{equipment.map((item) => item.name + ", ")}</ul>
                  </div>
                </Box>
                <HStack>t</HStack>
              </div>
            </HStack>
          </HStack>
        </Box>
        <Button
          h={230}
          bg={"#1C971A"}
          color={"white"}
          fontSize={50}
          onClick={() => {
            navigate(`/select_workout/${id}`);
          }}
        >
          +
        </Button>
      </HStack>
    </Box>
  );
}
