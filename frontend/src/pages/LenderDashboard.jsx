import {

  Building2,
  ShieldCheck,
  Wallet,
  CheckCircle,

} from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import {

  dashboardData,
  userData,
  shapFactors,

} from "../data/mockData";


function LenderDashboard() {

  return (

    <div>

      <PageHeader
        title="Lender Intelligence Dashboard"
        description="AI-powered borrower assessment and lending decision support."
      />


      <div className="borrower-profile-card">

        <div className="business-avatar">

          <Building2 size={32} />

        </div>


        <div className="borrower-profile-info">

          <h2>
            {userData.businessName}
          </h2>

          <p>
            {userData.borrowerType}
            {" • "}
            Active for {userData.monthsActive} months
          </p>

        </div>


        <div className="recommendation-box">

          <CheckCircle />

          <div>

            <span>AI Recommendation</span>

            <strong>APPROVE</strong>

          </div>

        </div>

      </div>


      <section className="stats-grid">

        <StatCard
          title="Credit Score"
          value="742"
          subtitle="Excellent"
          icon={<ShieldCheck />}
          variant="green"
        />

        <StatCard
          title="Estimated Income"
          value="₹38,500"
          subtitle="89% confidence"
          icon={<Wallet />}
          variant="purple"
        />

        <StatCard
          title="Income Stability"
          value="82%"
          subtitle="Strong consistency"
          icon={<ShieldCheck />}
          variant="blue"
        />

        <StatCard
          title="Risk Category"
          value="LOW"
          subtitle="Favorable profile"
          icon={<CheckCircle />}
          variant="green"
        />

      </section>


      <section className="dashboard-grid">

        <div className="content-card large">

          <div className="card-heading">

            <div>

              <h3>Explainable Risk Factors</h3>

              <p>
                Factors influencing the lending recommendation
              </p>

            </div>

          </div>


          <div className="lender-factor-list">

            {shapFactors.map((factor) => (

              <div
                className={`lender-factor ${
                  factor.type
                }`}
                key={factor.feature}
              >

                <div>

                  <strong>
                    {factor.feature}
                  </strong>

                  <div className="factor-bar">

                    <div
                      className="factor-progress"
                      style={{
                        width: `${Math.abs(
                          factor.impact
                        ) * 5}%`
                      }}
                    ></div>

                  </div>

                </div>


                <span>

                  {factor.impact > 0 ? "+" : ""}

                  {factor.impact}%

                </span>

              </div>

            ))}

          </div>

        </div>


        <div className="content-card lending-decision">

          <h3>Lending Recommendation</h3>

          <div className="decision-circle">

            <CheckCircle size={60} />

          </div>

          <h1>APPROVE</h1>

          <p>
            Borrower demonstrates stable income,
            strong credit health and manageable risk.
          </p>

          <button className="primary-button">

            View Full Report

          </button>

        </div>

      </section>

    </div>

  );

}

export default LenderDashboard;