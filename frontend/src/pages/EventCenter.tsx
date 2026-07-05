import { SequentialFlow } from "@/components/visuals/Flow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { events } from "@/data";

export function EventCenter() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Event center</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Banking Event Trace</h1>
        <p className="mt-2 text-slate-400">From salary credit to customer approval request.</p>
      </div>
      <Card className="p-6">
        <SequentialFlow items={events} compact />
      </Card>
    </div>
  );
}
