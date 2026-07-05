import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, DatabaseZap, ShieldCheck } from "lucide-react";
import { SequentialFlow } from "@/components/visuals/Flow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { decisionLayer } from "@/data";

export function DecisionLayer() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge>Wow page</Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">AI Decision Layer Visualization</h1>
          <p className="mt-2 max-w-2xl text-slate-400">
            Saarthi sits above existing banking systems and reasons over insights, never raw customer data.
          </p>
        </div>
        <div className="flex gap-2">
          {[DatabaseZap, BrainCircuit, ShieldCheck, BadgeCheck].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: index * 0.18 }}
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.07]"
            >
              <Icon className="h-5 w-5 text-emerald-300" />
            </motion.div>
          ))}
        </div>
      </div>
      <Card className="relative overflow-hidden p-6">
        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        <SequentialFlow items={decisionLayer} />
      </Card>
    </div>
  );
}
