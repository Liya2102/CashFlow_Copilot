import PageHeader from "../components/PageHeader";

import { useAppContext } from "../context/AppContext";


function Approvals() {

  const {

    approvals,
    approveAction,
    rejectAction,

  } = useAppContext();


  return (

    <div>

      <PageHeader
        title="Human Approval Center"
        description="Review and approve AI-generated financial actions."
      />


      <div className="approval-grid">

        {approvals.map((approval) => (

          <div
            className="approval-card"
            key={approval.id}
          >

            <div className="approval-top">

              <div>

                <span className="agent-tag">

                  🤖 {approval.agent}

                </span>

                <h3>
                  {approval.action}
                </h3>

              </div>


              <span
                className={`priority ${
                  approval.priority.toLowerCase()
                }`}
              >

                {approval.priority}

              </span>

            </div>


            <div className="approval-details">

              <div>

                <span>Customer</span>

                <strong>
                  {approval.customer}
                </strong>

              </div>


              <div>

                <span>Amount</span>

                <strong>
                  ₹{approval.amount.toLocaleString()}
                </strong>

              </div>

            </div>


            {approval.status === "Pending" ? (

              <div className="approval-actions">

                <button
                  className="reject-button"
                  onClick={() =>
                    rejectAction(approval.id)
                  }
                >

                  Reject

                </button>


                <button
                  className="approve-button"
                  onClick={() =>
                    approveAction(approval.id)
                  }
                >

                  Approve

                </button>

              </div>

            ) : (

              <div
                className={`approval-result ${
                  approval.status.toLowerCase()
                }`}
              >

                {approval.status === "Approved"
                  ? "✓ Action Approved"
                  : "✕ Action Rejected"
                }

              </div>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Approvals;