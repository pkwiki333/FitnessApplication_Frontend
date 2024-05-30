import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import useExercises from "../../api/exercises";
import StateHandler from "../StateHandler";
const baseUrlImages = process.env.REACT_APP_BASEURL_IMAGES;

export default function OpgeslagenExercesesPerExercise() {
  const { id } = useParams();
  const { getById } = useExercises();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: "",
    howTo: "",
    musclegroup: [],
    equipment: [],
    img: "",
  });

  const terug = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await getById(id);
        setExercise(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, getById]);

  return (
    <StateHandler loading={loading} error={error}>
      <br />
      <Button onClick={terug} ml="10px" bg={"#1C971A"} color={"white"}>
        Back
      </Button>
      <div>
        <HStack>
          <Box m={10} w="700px">
            <img
              src={baseUrlImages + exercise.img}
              alt={exercise.name}
              width="300px"
            />
          </Box>
          <Box>
            <Box fontSize={25}>
              <h1>
                <strong>{exercise.name}</strong>
              </h1>
            </Box>
            <Box mr={200}>
              <p>Equipment:</p>{" "}
              <div>
                {" "}
                <ul>{exercise.equipment.map((item) => item.name + ", ")}</ul>
              </div>
              <br />
              <p>
                How to: <br />
                {exercise.howTo}
              </p>
              <br />
              <p>Muscle group: </p>{" "}
              <div>
                <ul>{exercise.musclegroup.map((item) => item.name + ", ")}</ul>{" "}
              </div>
            </Box>
          </Box>
        </HStack>
      </div>
    </StateHandler>
  );
}
