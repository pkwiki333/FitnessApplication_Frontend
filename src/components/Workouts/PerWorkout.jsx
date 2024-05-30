import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useWorkouts from "../../api/workouts";
import StateHandler from "../StateHandler";
import OpgeslagenExercises from "./OpgelsagenExercises";

export default function PerWorkout() {
  const { id } = useParams();
  const { getWorkoutById } = useWorkouts();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigateWO = useNavigate();
  const [workout, setWorkouts] = useState({
    name: "",
  });
  const [exercises, setExercises] = useState([
    {
      name: "",
      howto: "",
      musclegroup: [],
      equipment: [],
      img: "",
    },
  ]);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await getWorkoutById(id);
      setWorkouts(data);
      setExercises(data.exercises);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [id, getWorkoutById]);
  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  return (
    <StateHandler loading={loading} error={error}>
      <div>
        <Button
          ml="10px"
          bg={"#1C971A"}
          color={"white"}
          mt="20px"
          onClick={() => navigateWO("/workouts")}
        >
          Back
        </Button>
        <Flex justifyContent={"center"}>
          {" "}
          <Text fontSize={"100px"}>{workout.name}</Text>
        </Flex>

        <ul className="list-group">
          {exercises.map((item) => (
            // id werkt hierbij niet dus name
            <div className="col" key={item.name}>
              <OpgeslagenExercises {...item} fetchData={fetchData} />
            </div>
          ))}
        </ul>
      </div>
    </StateHandler>
  );
}
