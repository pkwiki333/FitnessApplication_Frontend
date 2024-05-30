import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Tooltip, VStack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useWorkouts from "../../api/workouts";
import StateHandler from "../StateHandler";

export default function OpgeslagenExercises({
  id,
  name,
  howTo,
  musclegroup,
  equipment,
  img,
  fetchData,
}) {
  const navigate = useNavigate();
  const baseUrlImages = process.env.REACT_APP_BASEURL_IMAGES;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { deleteExerciseById } = useWorkouts();
  const { id: workoutId } = useParams();
  const handleDelete = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      await deleteExerciseById(workoutId, id);
      fetchData();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [deleteExerciseById, workoutId, id, fetchData]);

  return (
    <StateHandler loading={loading} error={error}>
      <Box ml={50} mr={50} key={id}>
        <HStack>
          <Box
            border="2px"
            borderRadius={15}
            minW={"500px"}
            borderColor={"#1C971A"}
            bgColor={"white"}
            w={2500}
            onClick={() => {
              navigate(`/opgelsagen_exercise_info/${id}`);
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
                </div>
              </HStack>
            </HStack>
          </Box>
          <VStack fontSize={"50px"}>
            <Tooltip label="Delete">
              <IconButton
                onClick={handleDelete}
                alignSelf={"end"}
                bgColor={"white"}
                color={"black"}
                size="500px"
                mr={"10px"}
                icon={<DeleteIcon />}
              ></IconButton>
            </Tooltip>
          </VStack>
        </HStack>
      </Box>
    </StateHandler>
  );
}
