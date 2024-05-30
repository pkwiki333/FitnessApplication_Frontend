import React, { useCallback, useEffect, useState } from "react";
import Workout from "./Workout";
import { Box, Button, Flex, Tooltip } from "@chakra-ui/react";
import useWorkouts from "../../api/workouts";
import { useNavigate } from "react-router";
import StateHandler from "../StateHandler";
import useUsers from "../../api/users";

export default function Workouts() {
  const navigate = useNavigate();
  const { getWorkoutsByUserId } = useWorkouts();
  const { getUserByAuth0Id } = useUsers();
  const [workouts, setworkouts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const user = await getUserByAuth0Id();
      const data = await getWorkoutsByUserId(user.id);
      setworkouts(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [getWorkoutsByUserId, getUserByAuth0Id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const openWO = () => {
    navigate("/create_workout");
  };

  return (
    <StateHandler loading={loading} error={error}>
      <Box>
        <br />
        <Flex justifyContent={"end"} mr="20px">
          <Tooltip label="Add workout" fontSize="md">
            <Button
              ml="10px"
              bg={"#1C971A"}
              color={"white"}
              border="2px"
              borderColor={"black"}
              width="100px"
              height="100px"
              fontSize={"70px"}
              alignItems={"start"}
              data-cy="createWorkout_button"
              onClick={openWO}
            >
              +
            </Button>
          </Tooltip>
        </Flex>
        <Flex flexWrap={"wrap"}>
          {workouts.map((item) => (
            <Flex className="flexbox-container" key={item.id} m="30px">
              <Workout {...item} fetchData={fetchData} />
            </Flex>
          ))}
        </Flex>
      </Box>
    </StateHandler>
  );
}
