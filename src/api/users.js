import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback } from "react";

const baseUrl = process.env.REACT_APP_BASEURL;

const useUsers = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAllUsers = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }, [getAccessTokenSilently]);

  const getUserById = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const getUserByAuth0Id = useCallback(
    async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${baseUrl}/users/me/auth0`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const addUser = useCallback(
    async (user) => {
      const token = await getAccessTokenSilently();
      const response = await axios.post(`${baseUrl}/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const updateUserById = useCallback(
    async (user) => {
      const token = await getAccessTokenSilently();
      const response = await axios.put(`${baseUrl}/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    [getAccessTokenSilently]
  );

  const getUserInfo = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }, [getAccessTokenSilently]);

 
  return { getAllUsers, getUserById, addUser, updateUserById, getUserInfo,getUserByAuth0Id };
};

export default useUsers;
