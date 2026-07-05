export const healthTrend = [
  { month: "Jan", score: 68, savings: 18000 },
  { month: "Feb", score: 71, savings: 22000 },
  { month: "Mar", score: 74, savings: 26000 },
  { month: "Apr", score: 78, savings: 31000 },
  { month: "May", score: 80, savings: 36000 },
  { month: "Jun", score: 82, savings: 42000 }
];

export const executiveTrend = [
  { name: "Mon", assisted: 1240, approved: 820 },
  { name: "Tue", assisted: 1510, approved: 970 },
  { name: "Wed", assisted: 1880, approved: 1210 },
  { name: "Thu", assisted: 2160, approved: 1440 },
  { name: "Fri", assisted: 2620, approved: 1790 },
  { name: "Sat", assisted: 2840, approved: 1900 }
];

export const recommendations = [
  {
    title: "Build Emergency Fund",
    confidence: 96,
    priority: "High",
    reason: "Your emergency savings cover only 12 days of expenses.",
    action: "Create AutoSave"
  },
  {
    title: "Start SIP Ladder",
    confidence: 89,
    priority: "Medium",
    reason: "Monthly surplus is stable for 4 months after debt obligations.",
    action: "Open SIP plan"
  },
  {
    title: "Review Insurance Cover",
    confidence: 84,
    priority: "Medium",
    reason: "Life stage changed and protection gap is estimated at 18 lakh.",
    action: "Compare term plans"
  }
];

export const events = [
  "Salary Credited",
  "Financial Health Updated",
  "AI Triggered",
  "Reasoning Complete",
  "Recommendation Generated",
  "Awaiting Approval"
];

export const journey = [
  "Student",
  "First Salary",
  "Emergency Fund",
  "Recurring Deposit",
  "SIP",
  "Home Loan",
  "Retirement"
];

export const decisionLayer = [
  "Incoming Event",
  "Kafka Event Broker",
  "Financial Intelligence Engine",
  "Customer Digital Twin",
  "AI Decision Layer",
  "Explainability Engine",
  "Consent Layer",
  "Execution"
];
