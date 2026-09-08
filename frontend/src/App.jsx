import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import IncomeReconstruction from "./pages/IncomeReconstruction";
import CreditScore from "./pages/CreditScore";
import CashFlowForecast from "./pages/CashFlowForecast";
import Receivables from "./pages/Receivables";
import AIAgents from "./pages/AIAgents";
import Alerts from "./pages/Alerts";
import Approvals from "./pages/Approvals";
import LenderDashboard from "./pages/LenderDashboard";
import Settings from "./pages/Settings";


function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <div className="main-layout">

          <Navbar />

          <main className="page-content">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/income"
                element={<IncomeReconstruction />}
              />

              <Route
                path="/credit-score"
                element={<CreditScore />}
              />

              <Route
                path="/forecast"
                element={<CashFlowForecast />}
              />

              <Route
                path="/receivables"
                element={<Receivables />}
              />

              <Route
                path="/agents"
                element={<AIAgents />}
              />

              <Route
                path="/alerts"
                element={<Alerts />}
              />

              <Route
                path="/approvals"
                element={<Approvals />}
              />

              <Route
                path="/lender"
                element={<LenderDashboard />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>

  );

}

export default App;