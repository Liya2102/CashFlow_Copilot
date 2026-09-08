import {

  Bot,
  TrendingUp,
  FileText,
  Handshake,

} from "lucide-react";

import PageHeader from "../components/PageHeader";

import { agents } from "../data/mockData";


function AIAgents() {

  const getIcon = (icon) => {

    if (icon === "forecast") {
      return <TrendingUp />;
    }

    if (icon === "receivable") {
      return <FileText />;
    }

    return <Handshake />;

  };


  return (

    <div>

      <PageHeader
        title="AI Agent Workspace"
        description="Autonomous financial agents working together through the CashFlow Copilot workflow."
      />


      <div className="agent-workflow">

        <div className="workflow-step">

          <div className="workflow-icon purple">

            <TrendingUp />

          </div>

          <strong>Cash Flow Agent</strong>

        </div>


        <div className="workflow-arrow">

          →

        </div>


        <div className="workflow-step">

          <div className="workflow-icon blue">

            <FileText />

          </div>

          <strong>Receivables Agent</strong>

        </div>


        <div className="workflow-arrow">

          →

        </div>


        <div className="workflow-step">

          <div className="workflow-icon orange">

            <Handshake />

          </div>

          <strong>Negotiation Agent</strong>

        </div>


        <div className="workflow-arrow">

          →

        </div>


        <div className="workflow-step">

          <div className="workflow-icon green">

            👤

          </div>

          <strong>Human Approval</strong>

        </div>

      </div>


      <section className="agent-grid">

        {agents.map((agent) => (

          <div
            className="agent-card"
            key={agent.id}
          >

            <div className="agent-card-header">

              <div className="agent-icon">

                {getIcon(agent.icon)}

              </div>

              <span
                className={`agent-status ${
                  agent.status.toLowerCase()
                }`}
              >

                {agent.status}

              </span>

            </div>


            <h3>{agent.name}</h3>

            <p>{agent.description}</p>


            <div className="agent-analysis">

              <span>Latest Analysis</span>

              <strong>
                {agent.lastAnalysis}
              </strong>

            </div>


            <button className="agent-button">

              {agent.action}

            </button>

          </div>

        ))}

      </section>

    </div>

  );

}

export default AIAgents;