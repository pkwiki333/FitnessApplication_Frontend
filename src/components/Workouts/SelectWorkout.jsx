import React, { useCallback, useEffect, useState } from "react";
import { Box, Card, Flex } from "@chakra-ui/react";
import useWorkouts from "../../api/workouts";
import { useParams } from "react-router";
import GeselecteerdeWorkout from "./GeselecteerdeWorkout";
import StateHandler from "../StateHandler";
import useUsers from "../../api/users";

export default function SelectWorkout() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getWorkoutsByUserId, updateWorkout } = useWorkouts();
  const { getUserByAuth0Id } = useUsers();
  const [workouts, setworkouts] = useState([]);
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
  }, [id, fetchData]);

  const addExercise = useCallback(
    (item) => async (e) => {
      item.exercises.push({ id: id });
      updateWorkout(item);
    },
    [id, updateWorkout]
  );

  return (
    <StateHandler loading={loading} error={error}>
      <Box>
        <br />
        <Flex flexWrap={"wrap"}>
          {workouts.map((item) => (
            <Card key={item.id} onClick={addExercise(item)}>
              <Flex className="flexbox-container" m="30px">
                <GeselecteerdeWorkout {...item} fetchData={fetchData} />
                <br />
              </Flex>
            </Card>
          ))}
        </Flex>
      </Box>
    </StateHandler>
  );
}
