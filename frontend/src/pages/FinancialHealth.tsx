import { Gauge } from "@/components/charts/Gauge";
import { HealthAreaChart, SavingsBarChart } from "@/components/charts/Charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const healthCards = [
  ["Emergency Fund", "12 days", "Target is 90 days"],
  ["Savings Rate", "22%", "Above peer median"],
  ["Debt Ratio", "18%", "Healthy"],
  ["Insurance Coverage", "72%", "Needs review"],
  ["Investment Readiness", "High", "Stable surplus found"]
];

export function FinancialHealth() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Financial health</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Financial Health Dashboard</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <Card className="grid place-items-center p-6">
          <Gauge value={82} label="Financial Health" size={220} />
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {healthCards.map(([title, value, caption]) => (
            <Card key={title} className="p-5">
              <p className="text-sm text-slate-400">{title}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
              <p className="mt-2 text-sm text-slate-500">{caption}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Monthly Health Score</CardTitle></CardHeader>
          <CardContent><HealthAreaChart /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Savings Trend</CardTitle></CardHeader>
          <CardContent><SavingsBarChart /></CardContent>
        </Card>
      </div>
    </div>
  );
}
