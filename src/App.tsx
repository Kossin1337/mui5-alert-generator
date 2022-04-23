import React, { createContext } from "react";
import AlertList from "./components/AlertList";
import AlertCreator from "./components/AlertCreator";
import { useFeedback } from "./hooks/useFeedback";
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
}

export const FeedbackContext = createContext<any>([]);

const App = () => {
  const { alerts, createAlert, deleteAlert } = useFeedback();

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
