import React, { useState, createContext } from "react";
import AlertList from "./components/AlertList";
import "./App.scss";

export interface IAlert {
  id: number;
  message: string;
  type: string;
  timeout: number;
}

type Alerts = {
  prevAlerts: IAlert[];
};

export interface IFeedBackContext {
  alerts: IAlert[];
  createAlert: (alert: IAlert) => void;
  // createAlert: any;
}

interface IStateAlert {
  alerts: IAlert[];
  setAlerts: (alert: IAlert) => [];
  // setAlerts: any;
}

interface IAlertCount {
  /* alertCount Interface */
  alertCount: number;
  // setAlertCount: (alertCount: number) => void; /* something here is fucked up */
}

export const FeedbackContext = createContext<IFeedBackContext[]>([]);

const App = () => {
  const [alerts, setAlerts] = useState<IStateAlert[]>([]);
  const [alertCount, setAlertCount] = useState(0);

  const createAlert = (message: string, type: string, timeout: number) => {
    setAlertCount((prevCount) => prevCount++); // error here
    const alert = { id: alertCount, message, type, timeout };

    setAlerts((prevAlerts: any) => [alert, ...prevAlerts]);
  };

  return (
    <div className="app">
      <FeedbackContext.Provider value={{ alerts }}>
        <AlertList />
      </FeedbackContext.Provider>
    </div>
  );
};

export default App;
