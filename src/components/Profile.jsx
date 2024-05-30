import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TextInput from "./TextInput";
import useUsers from "../api/users";
import StateHandler from "./StateHandler";

export default function Profile() {
  const [valueRadio, setValueRadio] = useState("man");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const { updateUserById, getUserInfo } = useUsers();
  const [user, setUser] = useState([
    {
      name: "",
      gender: "",
      goal: [],
      weight: 0,
      height: 0,
      age: 0,
      injuries: "",
    },
  ]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        setError(null);
        await updateUserById(data);
        setUser(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [updateUserById]
  );

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await getUserInfo();
        setUser(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [getUserInfo]);

  return (
    <StateHandler loading={loading} error={error}>
      <br />
      <FormProvider
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        isSubmitting={isSubmitting}
        getValues={getValues}
      >
        <FormControl ml={20}>
          <Grid templateColumns={"220px 400px"}>
            <GridItem w="50%" h="10">
              <FormLabel>gender*:</FormLabel>
            </GridItem>
            <GridItem w="100%" h="10">
              <RadioGroup
                {...register("gender")}
                onChange={setValueRadio}
                value={valueRadio}
                defaultValue={user.gender}
              >
                <Stack spacing={[1, 5]} direction="row" required>
                  <Radio
                    value="man"
                    borderColor={"#1C971A"}
                    colorScheme="green"
                  >
                    Male
                  </Radio>
                  <Radio
                    value="vrouw"
                    borderColor={"#1C971A"}
                    colorScheme="green"
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </GridItem>
          </Grid>
          <br />
          <Grid templateColumns={"220px 400px"}>
            <GridItem w="50%" h="10">
              <FormLabel>Age:</FormLabel>
            </GridItem>
            <GridItem w="100%" h="10">
              <TextInput
                type="number"
                defaultValue={user.age}
                name="age"
                placeholder="21"
                borderColor={"#1C971A"}
                bgColor={"white"}
                data-cy="age_input"
              />
            </GridItem>
          </Grid>
          <br />
          <Grid templateColumns={"220px 400px"}>
            <GridItem w="50%" h="10">
              <FormLabel>Weight (kg)*:</FormLabel>
            </GridItem>
            <GridItem w="100%" h="10">
              <TextInput
                defaultValue={user.weight}
                type="number"
                name="weight"
                placeholder={70}
                borderColor={"#1C971A"}
                bgColor={"white"}
                data-cy="weight_input"
                required
              />
            </GridItem>
          </Grid>
          <br />
          <Grid templateColumns={"220px 400px"}>
            <GridItem w="50%" h="10">
              <FormLabel>height (cm)*:</FormLabel>
            </GridItem>
            <GridItem w="100%" h="10">
              <TextInput
                type="number"
                defaultValue={user.height}
                name="height"
                placeholder={180}
                borderColor={"#1C971A"}
                bgColor={"white"}
                data-cy="height_input"
                required
              />
            </GridItem>
          </Grid>
          <br />
          <Grid templateColumns={"220px 400px"}>
            <GridItem w="50%" h="10">
              <FormLabel>injuries:</FormLabel>
            </GridItem>
            <GridItem w="100%" h="10">
              <TextInput
                name="injuries"
                defaultValue={user.injuries}
                type="text"
                placeholder="optional"
                bgColor={"white"}
                borderColor={"#1C971A"}
                data-cy="injuries_input"
              />
            </GridItem>
          </Grid>
          <br />
          <Button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            bg={"#1C971A"}
            color={"white"}
            data-cy="submit_button"
          >
            Save changes
          </Button>
        </FormControl>
      </FormProvider>
    </StateHandler>
  );
}
