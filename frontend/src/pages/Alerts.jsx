import PageHeader from "../components/PageHeader";

import { useAppContext } from "../context/AppContext";


function Alerts() {

  const {
    alerts,
    markAlertRead,
  } = useAppContext();


  return (

    <div>

      <PageHeader
        title="Financial Alerts"
        description="AI-generated risks, opportunities and financial insights."
      />


      <div className="alerts-page">

        {alerts.map((alert) => (

          <div
            className={`alert-card ${
              alert.type
            } ${
              alert.read ? "read" : ""
            }`}
            key={alert.id}
          >

            <div className="alert-symbol">

              {alert.type === "high"
                ? "🔴"
                : alert.type === "medium"
                ? "🟠"
                : "🟢"
              }

            </div>


            <div className="alert-content">

              <div className="alert-title-row">

                <h3>{alert.title}</h3>

                <span>{alert.time}</span>

              </div>

              <p>{alert.message}</p>

            </div>


            {!alert.read && (

              <button
                onClick={() =>
                  markAlertRead(alert.id)
                }
              >

                Mark Read

              </button>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Alerts;