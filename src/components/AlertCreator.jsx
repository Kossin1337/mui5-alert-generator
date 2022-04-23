import React, { useContext } from "react";
import { FeedbackContext } from "../App";
import { ButtonGroup, Button } from "@mui/material";

const AlertCreator = () => {
  const { createAlert } = useContext(FeedbackContext);

  return (
    <div className="alert-creator">
      <ButtonGroup>
        <Button
          variant="filled"
          onClick={() => createAlert("success", "success", 500)}
        >
          Success
        </Button>
        <Button
          variant="filled"
          onClick={() => createAlert("warning", "warning", 1250)}
        >
          Alert
        </Button>
        <Button
          variant="filled"
          onClick={() => createAlert("info", "info", 1750)}
        >
          Info
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AlertCreator;
