import { Button, FormLabel, Grid, GridItem, Input } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import useWorkouts from "../../api/workouts";
import { FormProvider, useForm } from "react-hook-form";
import StateHandler from "../StateHandler";

export default function CreateWorkouts() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addWorkout } = useWorkouts();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();

  const createWorkout = useCallback(
    async (workout) => {
      try {
        setError(null);
        setLoading(true);
        await addWorkout({
          ...workout,
        });
        navigate("/workouts");
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [addWorkout, navigate]
  );

  return (
    <StateHandler loading={loading} error={error}>
      <div>
        <br />
        <Grid justifyContent={"center"} templateColumns={"220px 400px"}>
          <GridItem w="50%" h="10" mb="50px">
            <FormLabel>Name*:</FormLabel>
          </GridItem>
          <GridItem w="100%" h="10">
            <FormProvider
              handleSubmit={handleSubmit}
              errors={errors}
              register={register}
              isSubmitting={isSubmitting}
              getValues={getValues}
            >
              <Input
                type="text"
                placeholder="Name"
                required
                borderColor={"#1C971A"}
                bgColor={"white"}
                data-cy="workoutName_input"
                {...register("name", { required: true })}
              />
            </FormProvider>
          </GridItem>

          <Button
            type="submit"
            data-cy="createWorkout_button"
            bg={"#1C971A"}
            color={"white"}
            onClick={handleSubmit(createWorkout)}
          >
            Add
          </Button>
        </Grid>
      </div>
    </StateHandler>
  );
}
