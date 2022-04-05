import axios from "axios";

export const getUsers = () => {
  return axios.get("/dashboard/users", {
    params: {
      limit: 1000,
    },
  });
};
