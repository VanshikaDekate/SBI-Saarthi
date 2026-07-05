import { motion } from "framer-motion";
import { Check, Eye, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { recommendations } from "@/data";

export function Recommendation() {
  const primary = recommendations[0];

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <Badge>AI recommendation</Badge>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Decision ready for Priya</h1>
        <p className="mt-2 text-slate-400">Saarthi explains the recommendation before asking for approval.</p>
      </div>
      <Card className="overflow-hidden">
        <div className="border-b border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-300/12">
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="font-semibold">Saarthi</p>
              <p className="text-xs text-slate-400">Reasoning over financial insights</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-white/[0.06] p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{primary.title}</h2>
                <p className="mt-3 max-w-2xl text-slate-300">{primary.reason}</p>
              </div>
              <Badge className="border-emerald-300/30 bg-emerald-300/10 text-emerald-100">
                Confidence {primary.confidence}%
              </Badge>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 p-4">
                <p className="text-xs text-slate-500">Priority</p>
                <p className="mt-1 font-bold text-amber-200">{primary.priority}</p>
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <p className="text-xs text-slate-500">Action</p>
                <p className="mt-1 font-bold">{primary.action}</p>
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <p className="text-xs text-slate-500">Consent</p>
                <p className="mt-1 font-bold text-sky-200">Required</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button><Check className="h-4 w-4" /> Approve</Button>
              <Button variant="danger"><X className="h-4 w-4" /> Dismiss</Button>
              <Button variant="secondary"><Eye className="h-4 w-4" /> View Explanation</Button>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
