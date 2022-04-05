import axios from "axios";

export const getUsers = () => {
  return axios.get("/dashboard/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = ({ date, login, name, surname }) => {
  return axios.post("/dashboard/addUser", {
    date: date,
    login: login,
    name: name,
    surname: surname,
  });
};

export const deleteUser = (userId) => {
  return axios.delete(`/dashboard/users/${userId}`);
};
