import { createContext, useContext, useState } from "react";

import {
  initialAlerts,
  initialReceivables,
  initialApprovals,
} from "../data/mockData";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [alerts, setAlerts] = useState(initialAlerts);

  const [receivables, setReceivables] =
    useState(initialReceivables);

  const [approvals, setApprovals] =
    useState(initialApprovals);


  const markAlertRead = (id) => {

    setAlerts((previousAlerts) =>
      previousAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, read: true }
          : alert
      )
    );

  };


  const approveAction = (id) => {

    setApprovals((previousApprovals) =>
      previousApprovals.map((approval) =>
        approval.id === id
          ? { ...approval, status: "Approved" }
          : approval
      )
    );

  };


  const rejectAction = (id) => {

    setApprovals((previousApprovals) =>
      previousApprovals.map((approval) =>
        approval.id === id
          ? { ...approval, status: "Rejected" }
          : approval
      )
    );

  };


  return (

    <AppContext.Provider
      value={{
        alerts,
        receivables,
        approvals,
        markAlertRead,
        approveAction,
        rejectAction,
      }}
    >

      {children}

    </AppContext.Provider>

  );

}


export function useAppContext() {

  return useContext(AppContext);

}