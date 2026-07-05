import { ExecutiveChart } from "@/components/charts/Charts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  ["Customers Assisted", "2.84M", "+18%"],
  ["Recommendations Generated", "7.2M", "+31%"],
  ["Financial Health Improvement", "14.8%", "+4.2 pts"],
  ["Digital Adoption", "68%", "+11%"],
  ["Customer Trust Score", "91/100", "+6"],
  ["Support Tickets Reduced", "24%", "-8.4K"]
];

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Executive dashboard</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">SBI Manager View</h1>
        <p className="mt-2 text-slate-400">Portfolio-level impact of consent-led AI recommendations.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(([label, value, delta]) => (
          <Card key={label} className="p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            <p className="mt-2 text-sm text-emerald-300">{delta}</p>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader><CardTitle>Customer Assistance and Approval Trend</CardTitle></CardHeader>
        <CardContent><ExecutiveChart /></CardContent>
      </Card>
    </div>
  );
}
