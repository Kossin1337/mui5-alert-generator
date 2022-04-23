import { useEffect, useContext } from "react";
import { FeedbackContext } from "../App";
import { Alert, AlertColor } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SingleAlert = ({ alertInfo }: any) => {
  const { alerts, deleteAlert } = useContext(FeedbackContext);
  // console.log(alertInfo);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      deleteAlert(alertInfo.id);
    }, alertInfo.timeout);

    return () => clearTimeout(alertTimer);
  }, [alerts]);

  return (
    <Alert
      variant="filled"
      severity={alertInfo.type as AlertColor}
      sx={{
        fontFamily: "Poppins",
        borderRadius: "14px",
        marginBottom: "0.5rem",
      }}
      icon={<HighlightOffIcon />}
    >
      {`${alertInfo.message} | ${alertInfo.timeout}`}
    </Alert>
  );
};

export default SingleAlert;
