import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { executiveTrend, healthTrend } from "@/data";

const tooltipStyle = {
  background: "rgba(5, 7, 13, .92)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 8,
  color: "#fff"
};

export function HealthAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={healthTrend}>
        <defs>
          <linearGradient id="score" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity={0.55} />
            <stop offset="100%" stopColor="#34d399" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
        <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="score" stroke="#34d399" strokeWidth={3} fill="url(#score)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function SavingsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={healthTrend}>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
        <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="savings" fill="#38bdf8" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ExecutiveChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <AreaChart data={executiveTrend}>
        <defs>
          <linearGradient id="assisted" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="approved" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#34d399" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area dataKey="assisted" stroke="#38bdf8" strokeWidth={3} fill="url(#assisted)" />
        <Area dataKey="approved" stroke="#34d399" strokeWidth={3} fill="url(#approved)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
