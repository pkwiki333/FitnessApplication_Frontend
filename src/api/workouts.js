import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback } from "react";

const baseUrl = process.env.REACT_APP_BASEURL;

const useWorkouts = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAllWorkouts = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseUrl}/workouts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }, [getAccessTokenSilently]);

  const getWorkoutById = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${baseUrl}/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const addWorkout = useCallback(
    async (workout) => {
      const token = await getAccessTokenSilently();
      const response = await axios.post(`${baseUrl}/workouts`, workout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const getWorkoutsByUserId = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${baseUrl}/workouts/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const updateWorkout = useCallback(
    async (workout) => {
      const token = await getAccessTokenSilently();
      const response = await axios.put(
        `${baseUrl}/workouts/${workout.id}`,
        workout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const deleteWorkout = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const response = await axios.delete(`${baseUrl}/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const deleteExerciseById = useCallback(
    async (workoutId, exerciseId) => {
      const token = await getAccessTokenSilently();
      const response = await axios.put(
        `${baseUrl}/workouts/${workoutId}/exercises/${exerciseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    [getAccessTokenSilently]
  );

  return {
    getAllWorkouts,
    getWorkoutById,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    deleteExerciseById,
    getWorkoutsByUserId,
  };
};

export default useWorkouts;
