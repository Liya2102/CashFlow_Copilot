import { useState } from "react";

import PageHeader from "../components/PageHeader";


function Settings() {

  const [notifications, setNotifications] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(false);


  return (

    <div>

      <PageHeader
        title="Settings"
        description="Manage your CashFlow Copilot preferences."
      />


      <div className="settings-container">

        <div className="content-card settings-card">

          <h3>Notifications</h3>

          <p>
            Receive alerts about financial risks and AI actions.
          </p>


          <button
            className={`toggle ${
              notifications ? "on" : ""
            }`}
            onClick={() =>
              setNotifications(!notifications)
            }
          >

            <span></span>

          </button>

        </div>


        <div className="content-card settings-card">

          <h3>Appearance</h3>

          <p>
            Enable dark mode for the dashboard.
          </p>


          <button
            className={`toggle ${
              darkMode ? "on" : ""
            }`}
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >

            <span></span>

          </button>

        </div>


        <div className="content-card settings-card">

          <h3>Data Refresh</h3>

          <p>
            Dashboard currently uses simulated demo data.
          </p>


          <button className="primary-button">

            Refresh Demo Data

          </button>

        </div>

      </div>

    </div>

  );

}

export default Settings;