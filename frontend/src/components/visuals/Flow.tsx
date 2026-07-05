import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function SequentialFlow({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center">
      {items.map((item, index) => (
        <div key={item} className="flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.16, duration: 0.45 }}
            className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-300/12 text-sm font-bold text-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={compact ? "text-sm font-semibold" : "text-base font-semibold"}>{item}</span>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          </motion.div>
          {index < items.length - 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 34 }}
              transition={{ delay: index * 0.16 + 0.12 }}
              className="grid place-items-center text-slate-500"
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
