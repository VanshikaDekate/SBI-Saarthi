import { SequentialFlow } from "@/components/visuals/Flow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { journey } from "@/data";

export function Journey() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Timeline</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Financial Journey Timeline</h1>
        <p className="mt-2 text-slate-400">A life-stage roadmap for SBI customers.</p>
      </div>
      <Card className="p-6">
        <SequentialFlow items={journey} />
      </Card>
    </div>
  );
}
