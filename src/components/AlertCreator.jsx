import React, { useContext } from "react";
import { FeedbackContext } from "../App";
import { ButtonGroup, Button } from "@mui/material";

const AlertCreator = () => {
  const { createAlert } = useContext(FeedbackContext);
  console.log(createAlert);

  return (
    <div className="alert-creator">
      <h1>yoyoyo</h1>
      <ButtonGroup>
        <Button onClick={createAlert("success", "success", 3000)}>
          Success
        </Button>
        <Button onClick={createAlert("alert", "alert", 3000)}>Alert</Button>
        <Button onClick={createAlert("info", "info", 3000)}>Info</Button>
      </ButtonGroup>
    </div>
  );
};

export default AlertCreator;
