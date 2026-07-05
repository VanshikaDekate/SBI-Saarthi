import { motion } from "framer-motion";

export function Gauge({ value, label, size = 190 }: { value: number; label: string; size?: number }) {
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 190 190" className="h-full w-full -rotate-90">
        <circle cx="95" cy="95" r={radius} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="14" />
        <motion.circle
          cx="95"
          cy="95"
          r={radius}
          fill="none"
          stroke="url(#healthGradient)"
          strokeLinecap="round"
          strokeWidth="14"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="healthGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop stopColor="#22d3ee" />
            <stop offset="55%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <p className="text-5xl font-extrabold tracking-tight">{value}</p>
        <p className="mt-1 text-xs uppercase text-slate-400">{label}</p>
      </div>
    </div>
  );
}
