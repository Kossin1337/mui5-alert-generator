import React, { useState, createContext } from "react";
import AlertList from "./components/AlertList";
import AlertCreator from "./components/AlertCreator";
import "./App.scss";

export interface IAlert {
  id: number;
  message: string;
  type: string;
  timeout: number;
}

export interface IFeedBackContext {
  alerts: IAlert[];
  createAlert: (message: string, type: string, timeout: number) => void;
  deleteAlert: (id: number) => void;
  // createAlert: any;
}

// export const FeedbackContext = createContext<any>([]);
export const FeedbackContext = createContext<IFeedBackContext | null>(null);

const App = () => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [alertCount, setAlertCount] = useState<number>(0);

  const createAlert = (message: string, type: string, timeout: number) => {
    const alert = { id: alertCount, message, type, timeout };
    setAlerts((prevAlerts: any) => [alert, ...prevAlerts]);

    setAlertCount((prevCount) => prevCount++);
  };

  const deleteAlert = (id: number) => {
    setAlerts(
      alerts.filter((alert: IAlert) => {
        return alert.id !== id;
      })
    );
  };

  return (
    <div className="app">
      <FeedbackContext.Provider value={{ alerts, createAlert, deleteAlert }}>
        <AlertCreator />
        <AlertList />
      </FeedbackContext.Provider>
    </div>
  );
};

export default App;
