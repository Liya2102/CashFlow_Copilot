import { useState } from "react";

import PageHeader from "../components/PageHeader";

import { useAppContext } from "../context/AppContext";


function Receivables() {

  const { receivables } = useAppContext();

  const [selectedReceivable, setSelectedReceivable] =
    useState(null);


  const [filter, setFilter] =
    useState("All");


  const filteredReceivables =
    filter === "All"
      ? receivables
      : receivables.filter(
          (item) => item.status === filter
        );


  return (

    <div>

      <PageHeader
        title="Receivables Management"
        description="Track outstanding payments and AI-generated collection actions."
      />


      <div className="filter-bar">

        {["All", "Overdue", "Pending", "Upcoming"].map(
          (item) => (

            <button
              key={item}
              className={
                filter === item
                  ? "filter-active"
                  : ""
              }
              onClick={() => setFilter(item)}
            >

              {item}

            </button>

          )
        )}

      </div>


      <div className="content-card table-card">

        <table>

          <thead>

            <tr>

              <th>Customer</th>

              <th>Amount</th>

              <th>Due Date</th>

              <th>Days Overdue</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {filteredReceivables.map((item) => (

              <tr key={item.id}>

                <td>

                  <strong>
                    {item.customer}
                  </strong>

                </td>

                <td>
                  ₹{item.amount.toLocaleString()}
                </td>

                <td>
                  {item.dueDate}
                </td>

                <td>
                  {item.overdueDays}
                </td>

                <td>

                  <span
                    className={`status ${
                      item.status.toLowerCase()
                    }`}
                  >

                    {item.status}

                  </span>

                </td>

                <td>

                  <button
                    className="primary-small-button"
                    onClick={() =>
                      setSelectedReceivable(item)
                    }
                  >

                    Generate Reminder

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {selectedReceivable && (

        <div className="modal-overlay">

          <div className="modal">

            <button
              className="modal-close"
              onClick={() =>
                setSelectedReceivable(null)
              }
            >

              ×

            </button>


            <div className="modal-agent">

              🤖

            </div>


            <h2>AI Receivables Agent</h2>

            <p>
              Customer:
              <strong>
                {" "}
                {selectedReceivable.customer}
              </strong>
            </p>


            <div className="reminder-box">

              <p>

                Hello {selectedReceivable.customer},

                <br /><br />

                This is a friendly reminder regarding
                the pending payment of
                ₹{selectedReceivable.amount.toLocaleString()}.

                <br /><br />

                Please let us know if you require any
                assistance regarding the payment.

                <br /><br />

                Thank you.

              </p>

            </div>


            <div className="modal-actions">

              <button
                className="secondary-button"
                onClick={() =>
                  setSelectedReceivable(null)
                }
              >

                Edit Message

              </button>

              <button
                className="primary-button"
                onClick={() => {

                  alert(
                    "Reminder approved successfully!"
                  );

                  setSelectedReceivable(null);

                }}
              >

                Approve & Send

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default Receivables;