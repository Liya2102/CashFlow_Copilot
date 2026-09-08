import {

  Wallet,
  TrendingUp,
  BarChart3,
  CheckCircle,

} from "lucide-react";

import {

  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,

} from "recharts";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import {
  dashboardData,
  incomeHistory,
} from "../data/mockData";


function IncomeReconstruction() {

  return (

    <div>

      <PageHeader
        title="Income Reconstruction"
        description="AI-based estimation of income from transaction patterns."
      />


      <div className="income-hero">

        <div>

          <span className="hero-label">

            ESTIMATED MONTHLY INCOME

          </span>

          <h1>₹38,500</h1>

          <p>
            Based on transaction history and financial patterns
          </p>

        </div>


        <div className="confidence-box">

          <CheckCircle size={28} />

          <div>

            <strong>89%</strong>

            <span>Model Confidence</span>

          </div>

        </div>

      </div>


      <section className="stats-grid three">

        <StatCard
          title="Income Stability"
          value="82%"
          subtitle="Strong consistency"
          icon={<TrendingUp />}
          variant="green"
        />

        <StatCard
          title="Recurring Revenue"
          value="₹26,400"
          subtitle="Reliable monthly income"
          icon={<Wallet />}
          variant="purple"
        />

        <StatCard
          title="Business Revenue"
          value="₹12,100"
          subtitle="Variable income"
          icon={<BarChart3 />}
          variant="blue"
        />

      </section>


      <div className="content-card">

        <div className="card-heading">

          <div>

            <h3>Reconstructed Income Trend</h3>

            <p>
              AI-estimated income across recent months
            </p>

          </div>

        </div>


        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <AreaChart data={incomeHistory}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip
              formatter={(value) =>
                `₹${value.toLocaleString()}`
              }
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#7c3aed"
              strokeWidth={3}
              fill="#ede9fe"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>


      <div className="ai-analysis-card">

        <div className="ai-analysis-icon">

          🤖

        </div>

        <div>

          <h3>AI Income Insight</h3>

          <p>
            Your financial activity shows consistent income growth
            over the past three months. Revenue patterns indicate
            strong business stability with moderate transaction
            volatility.
          </p>

        </div>

      </div>

    </div>

  );

}

export default IncomeReconstruction;