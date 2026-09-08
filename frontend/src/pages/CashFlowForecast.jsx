import {

  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,

} from "recharts";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import {

  ArrowDownToLine,
  ArrowUpFromLine,
  AlertTriangle,

} from "lucide-react";

import {
  cashFlowForecast,
  forecastSummary,
} from "../data/mockData";


function CashFlowForecast() {

  return (

    <div>

      <PageHeader
        title="Cash Flow Forecast"
        description="AI-powered prediction of future financial inflows and outflows."
      />


      <section className="stats-grid three">

        <StatCard
          title="Expected Inflow"
          value={`₹${forecastSummary.expectedInflow.toLocaleString()}`}
          subtitle="Next 30 days"
          icon={<ArrowDownToLine />}
          variant="green"
        />

        <StatCard
          title="Expected Outflow"
          value={`₹${forecastSummary.expectedOutflow.toLocaleString()}`}
          subtitle="Next 30 days"
          icon={<ArrowUpFromLine />}
          variant="red"
        />

        <StatCard
          title="Projected Gap"
          value={`₹${forecastSummary.projectedGap.toLocaleString()}`}
          subtitle="Requires monitoring"
          icon={<AlertTriangle />}
          variant="orange"
        />

      </section>


      <div className="content-card">

        <div className="card-heading">

          <div>

            <h3>30-Day Balance Forecast</h3>

            <p>
              Predicted cash balance trajectory
            </p>

          </div>

        </div>


        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <LineChart data={cashFlowForecast}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip
              formatter={(value) =>
                `₹${value.toLocaleString()}`
              }
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#7c3aed"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>


      <div className="forecast-alert">

        <div className="forecast-warning-icon">

          ⚠️

        </div>

        <div>

          <h3>Liquidity Risk Detected</h3>

          <p>
            Cash flow analysis predicts potential liquidity
            pressure within approximately 11 days.
          </p>

        </div>


        <button>

          View Recommended Actions

        </button>

      </div>

    </div>

  );

}

export default CashFlowForecast;