import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactMail from "@mui/icons-material/ContactMail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getUsersRequest,
  deleteUserRequest,
} from "../../../../store/actions/users";

const UsersList = () => {
  const usersList = useSelector((state) => state.users.items);
  const dispatch = useDispatch();
  const displayList = () => {
    if (usersList.length > 0) {
      return (
        <>
          {usersList.map((user) => {
            return (
              <Card sx={styles.card}>
                <ContactMail sx={styles.icon} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user?.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.name} {user?.surname}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See more</Button>
                  <Button
                    size="small"
                    onClick={() =>
                      dispatch(deleteUserRequest({ userId: user?._id }))
                    }
                  >
                    Delete user
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </>
      );
    }
  };
  useEffect(() => {
    fetchUsersToDisplay();
  }, []);

  const fetchUsersToDisplay = () => {
    dispatch(getUsersRequest());
  };
  return <Box sx={styles.box}>{displayList()}</Box>;
};

const styles = {
  box: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px",
    paddingTop: "45px",
  },
  card: {
    maxWidth: 345,
    marginBottom: "25px",
  },
  icon: {
    width: 100,
    height: 75,
    color: "primary.main",
  },
};

export default UsersList;
