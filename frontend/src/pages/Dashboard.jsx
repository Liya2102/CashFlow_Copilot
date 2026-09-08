import {

  Wallet,
  TrendingUp,
  CreditCard,
  Bell,

} from "lucide-react";

import {

  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,

} from "recharts";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import {

  dashboardData,
  incomeHistory,
  transactions,

} from "../data/mockData";

import { useAppContext } from "../context/AppContext";


function Dashboard() {

  const { alerts } = useAppContext();


  return (

    <div>

      <PageHeader
        title="Financial Overview"
        description="Your AI-powered financial intelligence dashboard."
      />


      <section className="stats-grid">

        <StatCard
          title="Estimated Income"
          value={`₹${dashboardData.estimatedIncome.toLocaleString()}`}
          subtitle={`↑ ${dashboardData.incomeGrowth}% this month`}
          icon={<Wallet size={22} />}
          variant="purple"
        />


        <StatCard
          title="Income Stability"
          value={`${dashboardData.incomeStability}%`}
          subtitle="Strong financial consistency"
          icon={<TrendingUp size={22} />}
          variant="blue"
        />


        <StatCard
          title="Credit Score"
          value={dashboardData.creditScore}
          subtitle="Excellent credit health"
          icon={<CreditCard size={22} />}
          variant="green"
        />


        <StatCard
          title="Active Alerts"
          value={alerts.filter(a => !a.read).length}
          subtitle="Requires your attention"
          icon={<Bell size={22} />}
          variant="orange"
        />

      </section>


      <section className="dashboard-grid">

        <div className="content-card large">

          <div className="card-heading">

            <div>

              <h3>Income vs Expenses</h3>

              <p>Monthly financial performance</p>

            </div>

          </div>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <AreaChart data={incomeHistory}>

              <defs>

                <linearGradient
                  id="income"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#7c3aed"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#7c3aed"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>


              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

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
                fill="url(#income)"
              />

              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#ef4444"
                strokeWidth={2}
                fill="transparent"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>


        <div className="content-card">

          <div className="card-heading">

            <div>

              <h3>Financial Health</h3>

              <p>Overall assessment</p>

            </div>

          </div>


          <div className="health-score">

            <div className="health-circle">

              <span>82</span>

              <small>Healthy</small>

            </div>

          </div>


          <div className="health-details">

            <div>

              <span>Income Stability</span>

              <strong>82%</strong>

            </div>

            <div>

              <span>Credit Health</span>

              <strong>Excellent</strong>

            </div>

            <div>

              <span>Model Confidence</span>

              <strong>89%</strong>

            </div>

          </div>

        </div>

      </section>


      <section className="dashboard-grid">

        <div className="content-card large">

          <div className="card-heading">

            <div>

              <h3>Recent Transactions</h3>

              <p>Latest financial activity</p>

            </div>

          </div>


          <div className="transaction-list">

            {transactions.map((transaction) => (

              <div
                className="transaction-item"
                key={transaction.id}
              >

                <div className="transaction-icon">

                  {transaction.type === "credit"
                    ? "↓"
                    : "↑"
                  }

                </div>


                <div className="transaction-info">

                  <strong>
                    {transaction.description}
                  </strong>

                  <span>
                    {transaction.category}
                  </span>

                </div>


                <div
                  className={
                    transaction.type === "credit"
                      ? "amount credit"
                      : "amount debit"
                  }
                >

                  {transaction.type === "credit"
                    ? "+"
                    : "-"
                  }

                  ₹{transaction.amount.toLocaleString()}

                </div>

              </div>

            ))}

          </div>

        </div>


        <div className="content-card">

          <div className="card-heading">

            <div>

              <h3>AI Insights</h3>

              <p>Latest intelligence</p>

            </div>

          </div>


          <div className="insight-list">

            <div className="insight purple-insight">

              <span>📈</span>

              <div>

                <strong>Income Growing</strong>

                <p>
                  Revenue increased by 8.4%.
                </p>

              </div>

            </div>


            <div className="insight orange-insight">

              <span>⚠️</span>

              <div>

                <strong>Liquidity Risk</strong>

                <p>
                  Monitor cash flow in 11 days.
                </p>

              </div>

            </div>


            <div className="insight blue-insight">

              <span>🤖</span>

              <div>

                <strong>Agent Activity</strong>

                <p>
                  Receivables agent found overdue payments.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Dashboard;