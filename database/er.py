import networkx as nx
import matplotlib.pyplot as plt

G = nx.DiGraph()

tables = [
    "borrowers",
    "documents",
    "raw_transactions",
    "cleaned_transactions",
    "features",
    "credit_scores",
    "score_explanations",
    "cashflow_forecasts",
    "risk_alerts",
    "invoices",
    "receivables",
    "agent_decisions",
    "audit_logs"
]

G.add_nodes_from(tables)

relationships = [
    ("borrowers", "documents"),
    ("borrowers", "raw_transactions"),
    ("raw_transactions", "cleaned_transactions"),
    ("cleaned_transactions", "features"),
    ("borrowers", "credit_scores"),
    ("credit_scores", "score_explanations"),
    ("borrowers", "cashflow_forecasts"),
    ("cashflow_forecasts", "risk_alerts"),
    ("borrowers", "invoices"),
    ("invoices", "receivables"),
    ("borrowers", "agent_decisions")
]

G.add_edges_from(relationships)

plt.figure(figsize=(18, 10))

pos = nx.spring_layout(G, k=2, seed=42)

nx.draw(
    G,
    pos,
    with_labels=True,
    node_size=4000,
    node_color="lightblue",
    font_size=8,
    arrows=True
)

plt.title("CashFlow Copilot ER Diagram")
plt.tight_layout()

plt.savefig("cashflow_copilot_er_diagram.png")
plt.show()