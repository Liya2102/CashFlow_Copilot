export const userData = {
  name: "Alex Johnson",
  initials: "AJ",
  businessName: "Johnson Retail Store",
  borrowerType: "Micro Business",
  monthsActive: 18,
  location: "Hyderabad, India",
};


export const dashboardData = {
  estimatedIncome: 38500,
  incomeGrowth: 8.4,
  incomeStability: 82,
  creditScore: 742,
  riskCategory: "Low",
  cashBalance: 64200,
  activeAlerts: 3,
  confidence: 89,
};


export const incomeHistory = [
  { month: "Apr", income: 28000, expenses: 21000 },
  { month: "May", income: 32000, expenses: 23000 },
  { month: "Jun", income: 29500, expenses: 24500 },
  { month: "Jul", income: 35000, expenses: 26000 },
  { month: "Aug", income: 36800, expenses: 27500 },
  { month: "Sep", income: 38500, expenses: 28200 },
];


export const cashFlowForecast = [
  { day: "Today", inflow: 12000, outflow: 8000, balance: 64200 },
  { day: "Day 5", inflow: 18000, outflow: 22000, balance: 60200 },
  { day: "Day 10", inflow: 10000, outflow: 28000, balance: 42200 },
  { day: "Day 15", inflow: 15000, outflow: 35000, balance: 22200 },
  { day: "Day 20", inflow: 22000, outflow: 18000, balance: 26200 },
  { day: "Day 25", inflow: 30000, outflow: 22000, balance: 34200 },
  { day: "Day 30", inflow: 18000, outflow: 25000, balance: 27200 },
];


export const forecastSummary = {
  expectedInflow: 125000,
  expectedOutflow: 162000,
  projectedGap: 37000,
  riskLevel: "Medium",
};


export const transactions = [
  {
    id: 1,
    date: "2026-09-07",
    description: "Customer Payment - ABC Traders",
    category: "Revenue",
    amount: 24500,
    type: "credit",
  },
  {
    id: 2,
    date: "2026-09-06",
    description: "Shop Electricity Bill",
    category: "Utility",
    amount: 4200,
    type: "debit",
  },
  {
    id: 3,
    date: "2026-09-05",
    description: "Vendor Payment",
    category: "Vendor Payment",
    amount: 18500,
    type: "debit",
  },
  {
    id: 4,
    date: "2026-09-04",
    description: "Online Sales Revenue",
    category: "Revenue",
    amount: 15600,
    type: "credit",
  },
];


export const initialAlerts = [
  {
    id: 1,
    type: "high",
    title: "Cash Shortage Expected",
    message: "Potential cash shortage predicted within 11 days.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "medium",
    title: "Receivable Overdue",
    message: "₹24,500 is overdue from ABC Traders.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "positive",
    title: "Income Growth Detected",
    message: "Your estimated income increased by 8.4% this month.",
    time: "Yesterday",
    read: true,
  },
];


export const initialReceivables = [
  {
    id: 1,
    customer: "ABC Traders",
    amount: 24500,
    dueDate: "Aug 20, 2026",
    overdueDays: 18,
    status: "Overdue",
    risk: "High",
  },
  {
    id: 2,
    customer: "Green Foods",
    amount: 12000,
    dueDate: "Aug 28, 2026",
    overdueDays: 10,
    status: "Pending",
    risk: "Medium",
  },
  {
    id: 3,
    customer: "XYZ Stores",
    amount: 18500,
    dueDate: "Sep 10, 2026",
    overdueDays: 0,
    status: "Upcoming",
    risk: "Low",
  },
];


export const agents = [
  {
    id: 1,
    name: "Cash Flow Agent",
    icon: "forecast",
    status: "Active",
    description: "Monitors future inflows, expenses and liquidity risks.",
    lastAnalysis: "Potential liquidity pressure detected in 11 days.",
    action: "Monitor Receivables",
  },
  {
    id: 2,
    name: "Receivables Agent",
    icon: "receivable",
    status: "Active",
    description: "Identifies overdue invoices and prepares payment reminders.",
    lastAnalysis: "₹24,500 overdue from ABC Traders.",
    action: "Generate Reminder",
  },
  {
    id: 3,
    name: "Negotiation Agent",
    icon: "negotiation",
    status: "Waiting",
    description: "Suggests payment terms and settlement strategies.",
    lastAnalysis: "Waiting for receivable response.",
    action: "Stand By",
  },
];


export const initialApprovals = [
  {
    id: 1,
    agent: "Receivables Agent",
    action: "Send Payment Reminder",
    customer: "ABC Traders",
    amount: 24500,
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    agent: "Negotiation Agent",
    action: "Offer Settlement Plan",
    customer: "Green Foods",
    amount: 12000,
    priority: "Medium",
    status: "Pending",
  },
];


export const shapFactors = [
  {
    feature: "Stable Revenue",
    impact: 18,
    type: "positive",
  },
  {
    feature: "Consistent Deposits",
    impact: 14,
    type: "positive",
  },
  {
    feature: "Low Expense Ratio",
    impact: 10,
    type: "positive",
  },
  {
    feature: "Delayed Receivables",
    impact: -9,
    type: "negative",
  },
  {
    feature: "Revenue Volatility",
    impact: -6,
    type: "negative",
  },
];