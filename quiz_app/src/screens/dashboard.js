import React from "react";
import DashboardLayout from "../components/dashboardLayout";
import DashboardTitle from "../components/dashboardTitle";
import ListOfFullfilledQuizzes from "./dashboard/listOfFullfilledQuizzes";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box sx={styles}>
        <DashboardTitle title="Fullfield Quizzes" />
        <ListOfFullfilledQuizzes />
      </Box>
    </DashboardLayout>
  );
};

const styles = {
  backgroundColor: "background.default",
};
export default Dashboard;
