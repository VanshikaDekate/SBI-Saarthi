import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CheckCircle2, Landmark, LockKeyhole, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const philosophy = ["Observe", "Reason", "Plan", "Explain", "Customer Consent", "Execute"];

export function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 glass-grid" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-white text-slate-950">
            <Landmark className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold">SBI Saarthi</span>
        </Link>
        <Link to="/login">
          <Button variant="secondary" size="sm">Launch Demo</Button>
        </Link>
      </nav>
      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-20">
        <div>
          <Badge className="border-emerald-300/25 bg-emerald-300/10 text-emerald-100">
            High-fidelity banking AI prototype
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            SBI Saarthi
          </motion.h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">
            The AI Decision Layer for Intelligent Banking
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Existing analytics observe financial signals. Saarthi reasons over insights, explains actions,
            and waits for customer consent before anything moves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login">
              <Button size="lg">Launch Demo <ArrowRight className="h-4 w-4" /></Button>
            </Link>
            <Link to="/decision-layer">
              <Button variant="secondary" size="lg">View Decision Layer</Button>
            </Link>
          </div>
        </div>
        <Card className="relative overflow-hidden p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/12 via-transparent to-emerald-300/12" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Architecture Preview</p>
                <p className="font-semibold">Consent-first intelligence</p>
              </div>
              <BrainCircuit className="h-6 w-6 text-emerald-300" />
            </div>
            <div className="grid gap-3">
              {["Banking Systems", "Financial Insights", "AI Reasoning", "Explainability", "Consent", "Execution"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12 }}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <span className="text-sm font-medium">{item}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </Card>
      </section>
      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          { icon: Workflow, title: "Customer Journey", text: philosophy.join(" -> ") },
          { icon: LockKeyhole, title: "Privacy by Design", text: "AI never sees raw banking data, only derived insights." },
          { icon: Sparkles, title: "Recommendation Layer", text: "Turns financial events into clear next-best actions." }
        ].map((feature) => (
          <Card key={feature.title} className="p-5">
            <feature.icon className="mb-4 h-6 w-6 text-sky-300" />
            <h2 className="text-lg font-bold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{feature.text}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
