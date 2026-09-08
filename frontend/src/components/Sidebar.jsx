import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  TrendingUp,
  FileText,
  Bot,
  Bell,
  CheckSquare,
  Building2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";


function Sidebar() {

  const [collapsed, setCollapsed] =
    useState(false);


  const menuItems = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/",
    },

    {
      name: "Income Reconstruction",
      icon: <Wallet size={20} />,
      path: "/income",
    },

    {
      name: "Credit Score",
      icon: <CreditCard size={20} />,
      path: "/credit-score",
    },

    {
      name: "Cash Flow Forecast",
      icon: <TrendingUp size={20} />,
      path: "/forecast",
    },

    {
      name: "Receivables",
      icon: <FileText size={20} />,
      path: "/receivables",
    },

    {
      name: "AI Agents",
      icon: <Bot size={20} />,
      path: "/agents",
    },

    {
      name: "Alerts",
      icon: <Bell size={20} />,
      path: "/alerts",
    },

    {
      name: "Approvals",
      icon: <CheckSquare size={20} />,
      path: "/approvals",
    },

    {
      name: "Lender View",
      icon: <Building2 size={20} />,
      path: "/lender",
    },

  ];


  return (

    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >

      <div className="sidebar-header">

        <div className="brand">

          <div className="brand-icon">

            <Sparkles size={20} />

          </div>

          {!collapsed && (

            <div className="brand-text">

              <h2>CashFlow</h2>

              <span>Copilot</span>

            </div>

          )}

        </div>


        <button
          className="collapse-button"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >

          {collapsed
            ? <ChevronRight size={18} />
            : <ChevronLeft size={18} />
          }

        </button>

      </div>


      <div className="sidebar-scroll">

        {!collapsed && (

          <p className="menu-label">

            FINANCIAL INTELLIGENCE

          </p>

        )}


        <nav className="sidebar-menu">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className="sidebar-link"
              title={collapsed ? item.name : ""}
            >

              <span className="menu-icon">

                {item.icon}

              </span>

              {!collapsed && (

                <span className="menu-text">

                  {item.name}

                </span>

              )}

            </NavLink>

          ))}

        </nav>

      </div>


      <div className="sidebar-bottom">

        <NavLink
          to="/settings"
          className="sidebar-link"
        >

          <Settings size={20} />

          {!collapsed && (
            <span>Settings</span>
          )}

        </NavLink>


        {!collapsed && (

          <div className="sidebar-profile">

            <div className="profile-avatar">

              AJ

            </div>

            <div>

              <strong>Alex Johnson</strong>

              <span>Micro Business</span>

            </div>

          </div>

        )}

      </div>

    </aside>

  );

}

export default Sidebar;