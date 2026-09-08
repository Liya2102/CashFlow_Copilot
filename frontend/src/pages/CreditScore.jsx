import {

  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,

} from "recharts";

import PageHeader from "../components/PageHeader";

import {
  dashboardData,
  shapFactors,
} from "../data/mockData";


function CreditScore() {

  return (

    <div>

      <PageHeader
        title="Explainable Credit Score"
        description="AI-powered credit assessment with transparent explanations."
      />


      <section className="credit-layout">

        <div className="content-card credit-main-card">

          <p className="credit-label">

            CREDIT SCORE

          </p>


          <div className="big-score">

            <div className="score-ring">

              <div>

                <h1>
                  {dashboardData.creditScore}
                </h1>

                <span>Excellent</span>

              </div>

            </div>

          </div>


          <div className="credit-range">

            <span>300</span>

            <div className="range-line"></div>

            <span>850</span>

          </div>

        </div>


        <div className="content-card">

          <h3>Risk Assessment</h3>

          <div className="risk-summary">

            <div>

              <span>Risk Category</span>

              <strong className="low-risk">
                LOW RISK
              </strong>

            </div>

            <div>

              <span>Model Confidence</span>

              <strong>91%</strong>

            </div>

            <div>

              <span>Income Stability</span>

              <strong>82%</strong>

            </div>

            <div>

              <span>Recommendation</span>

              <strong className="approve">
                APPROVE
              </strong>

            </div>

          </div>

        </div>

      </section>


      <section className="dashboard-grid">

        <div className="content-card large">

          <div className="card-heading">

            <div>

              <h3>Why This Score?</h3>

              <p>
                SHAP-style feature impact explanation
              </p>

            </div>

          </div>


          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart
              layout="vertical"
              data={shapFactors}
            >

              <XAxis type="number" />

              <YAxis
                type="category"
                dataKey="feature"
                width={140}
              />

              <Tooltip />

              <Bar
                dataKey="impact"
                fill="#7c3aed"
                radius={[0, 6, 6, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>


        <div className="content-card">

          <h3>Key Factors</h3>

          <div className="factor-list">

            {shapFactors.map((factor) => (

              <div
                className={`factor ${
                  factor.type
                }`}
                key={factor.feature}
              >

                <span>

                  {factor.type === "positive"
                    ? "+"
                    : "−"
                  }

                  {factor.feature}

                </span>

                <strong>

                  {factor.impact > 0
                    ? "+"
                    : ""
                  }

                  {factor.impact}%

                </strong>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

}

export default CreditScore;