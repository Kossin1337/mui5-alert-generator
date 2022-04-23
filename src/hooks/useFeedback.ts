import { useState } from "react";

export interface IAlert {
  id: number;
  message: string;
  type: string;
  timeout: number;
}

export const useFeedback = () => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [alertCount, setAlertCount] = useState<number>(0);

  const createAlert = (message: string, type: string, timeout: number) => {
    const alert = { id: alertCount, message, type, timeout };
    setAlerts((prevAlerts: any) => [alert, ...prevAlerts]);

    setAlertCount((prevCount) => prevCount + 1);
  };

  const deleteAlert = (id: number) => {
    setAlerts(
      alerts.filter((alert: IAlert) => {
        return alert.id !== id;
      })
    );
  };

  return { alerts, createAlert, deleteAlert };
};
