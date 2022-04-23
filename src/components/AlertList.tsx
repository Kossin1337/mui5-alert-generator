import React, { useContext } from "react";
import { FeedbackContext } from "../App";
import SingleAlert from "./SingleAlert";
import { IAlert } from "../App";

const AlertList = () => {
  const { alerts } = useContext(FeedbackContext);

  return (
    <div className="alert-list">
      <span>Feedback List</span>
      {alerts.map((alert: IAlert) => (
        <SingleAlert alertInfo={alert} key={alert.id} />
      ))}
    </div>
  );
};

export default AlertList;
