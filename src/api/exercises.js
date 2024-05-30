import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

const baseUrl = process.env.REACT_APP_BASEURL;

const useExercises = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getExercises = useCallback(
    async (zoekterm) => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        `${baseUrl}/exercises?zoekterm=${zoekterm}`,
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

  const getById = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${baseUrl}/exercises/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  return { getExercises, getById };
};

export default useExercises;
