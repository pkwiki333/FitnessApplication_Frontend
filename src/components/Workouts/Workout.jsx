import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Flex,
  CardFooter,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import useWorkouts from "../../api/workouts";
import StateHandler from "../StateHandler";

export default function Workout({ id, name, exercises, fetchData }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { deleteWorkout } = useWorkouts();
  const openWO = () => {
    navigate(`/workout_info/${id}`);
  };

  const deleteWO = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await deleteWorkout(id);
      fetchData();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [deleteWorkout, id, fetchData]);

  return (
    <StateHandler error={error} loading={loading}>
      <Flex justifyContent={"space-evenly"}>
        <Card
          onClick={openWO}
          display="flex"
          align="center"
          w="250px"
          h="250px"
          border="2px"
          borderRadius={15}
          borderColor={"black"}
          bgColor={"#1C971A"}
          color={"white"}
        >
          <CardHeader>
            <Heading size="md"></Heading>
          </CardHeader>
          <CardBody alignItems={"center"}>
            <Text fontSize={40}>
              <strong>{name}</strong>
            </Text>
          </CardBody>
          <CardFooter>
            <Text>{`${exercises.length} number of exercises`}</Text>
          </CardFooter>
        </Card>
        <Tooltip label="Delete">
          <IconButton
            bgColor={"#1C971A"}
            color={"white"}
            data-cy="delete-workout"
            onClick={deleteWO}
            icon={<DeleteIcon />}
          ></IconButton>
        </Tooltip>
      </Flex>
    </StateHandler>
  );
}
