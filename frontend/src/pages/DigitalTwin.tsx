import { BriefcaseBusiness, HeartPulse, Shield, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const profile = [
  ["Age", "29"],
  ["Occupation", "Product Manager"],
  ["Life Stage", "Early career, urban renter"],
  ["Risk Appetite", "Moderate"],
  ["Savings Habit", "Consistent"],
  ["Insurance", "Partial coverage"],
  ["Goals", "Emergency fund, SIP, home down payment"],
  ["Financial Confidence", "74%"]
];

export function DigitalTwin() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Customer digital twin</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Priya Sharma</h1>
        <p className="mt-2 text-slate-400">A privacy-preserving profile derived from banking insights.</p>
      </div>
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-sky-400/18 via-emerald-300/12 to-transparent p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-20 w-20 place-items-center rounded-lg bg-white text-slate-950">
              <UserRound className="h-9 w-9" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Priya Sharma</h2>
              <p className="mt-1 text-slate-300">Mumbai • Salary account • Digitally active</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
              <p className="text-xs uppercase text-slate-500">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </Card>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: BriefcaseBusiness, title: "Income Stability", value: "92%" },
          { icon: Shield, title: "Protection Score", value: "72%" },
          { icon: HeartPulse, title: "Confidence Index", value: "74%" }
        ].map((item) => (
          <Card key={item.title} className="p-5">
            <item.icon className="mb-5 h-6 w-6 text-emerald-300" />
            <p className="text-sm text-slate-400">{item.title}</p>
            <p className="mt-2 text-3xl font-bold">{item.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
