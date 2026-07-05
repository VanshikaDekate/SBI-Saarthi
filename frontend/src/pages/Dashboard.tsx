import { ArrowUpRight, BadgeIndianRupee, ShieldCheck, Target, WalletCards } from "lucide-react";
import { Gauge } from "@/components/charts/Gauge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recommendations } from "@/data";

const metrics = [
  ["Savings", "₹42,000", "Growing 18% MoM"],
  ["Debt", "18%", "Healthy EMI ratio"],
  ["Insurance", "72%", "Protection gap found"],
  ["Liquidity", "12 days", "Needs attention"],
  ["Investment Readiness", "High", "Surplus detected"],
  ["Emergency Fund", "₹18,500", "Target ₹1.5L"]
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge className="mb-3">Customer view</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Hello Priya 👋</h1>
          <p className="mt-2 text-slate-400">Your financial decisions are ready for review.</p>
        </div>
        <Card className="p-4">
          <p className="text-sm text-slate-400">Next best action</p>
          <p className="mt-1 font-semibold text-emerald-200">Approve AutoSave plan</p>
        </Card>
      </div>
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <Card className="grid place-items-center p-6">
          <Gauge value={82} label="Health / 100" />
          <p className="mt-2 text-sm text-slate-400">Financial Health Score</p>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map(([title, value, meta]) => (
            <Card key={title} className="p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/8">
                {title === "Savings" ? <WalletCards className="h-5 w-5 text-sky-300" /> : null}
                {title === "Debt" ? <BadgeIndianRupee className="h-5 w-5 text-amber-300" /> : null}
                {title === "Insurance" ? <ShieldCheck className="h-5 w-5 text-emerald-300" /> : null}
                {!["Savings", "Debt", "Insurance"].includes(title) ? <Target className="h-5 w-5 text-cyan-300" /> : null}
              </div>
              <p className="text-sm text-slate-400">{title}</p>
              <p className="mt-1 text-2xl font-bold">{value}</p>
              <p className="mt-2 text-xs text-slate-500">{meta}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Recent Recommendations</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {recommendations.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-lg bg-white/[0.05] p-4">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.reason}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-emerald-300" />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Upcoming Financial Goals</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {["Emergency corpus by September", "SIP review in 14 days", "Health insurance renewal"].map((goal) => (
              <div key={goal} className="rounded-lg border border-white/10 p-4">
                <p className="font-medium">{goal}</p>
                <div className="mt-3 h-2 rounded-full bg-white/8">
                  <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-sky-300 to-emerald-300" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
