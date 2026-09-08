import { useState } from "react";

import {
  Bell,
  Search,
  RefreshCw,
} from "lucide-react";

import { useAppContext } from "../context/AppContext";


function Navbar() {

  const { alerts } = useAppContext();

  const [refreshing, setRefreshing] =
    useState(false);


  const unreadAlerts =
    alerts.filter((alert) => !alert.read).length;


  const refreshDashboard = () => {

    setRefreshing(true);

    setTimeout(() => {

      setRefreshing(false);

    }, 1000);

  };


  return (

    <header className="navbar">

      <div className="navbar-search">

        <Search size={19} />

        <input
          placeholder="Search insights, transactions..."
        />

      </div>


      <div className="navbar-actions">

        <button
          className={`icon-button ${
            refreshing ? "rotating" : ""
          }`}
          onClick={refreshDashboard}
        >

          <RefreshCw size={19} />

        </button>


        <button className="icon-button notification-button">

          <Bell size={20} />

          {unreadAlerts > 0 && (

            <span className="notification-badge">

              {unreadAlerts}

            </span>

          )}

        </button>


        <div className="navbar-user">

          <div className="navbar-avatar">

            AJ

          </div>

          <div>

            <strong>Alex Johnson</strong>

            <span>Borrower Account</span>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;