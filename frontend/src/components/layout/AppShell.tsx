import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Activity,
  BrainCircuit,
  ChartNoAxesCombined,
  GitBranch,
  HeartPulse,
  Home,
  Landmark,
  Layers3,
  Sparkles,
  UserRound
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/recommendation", label: "AI Recommendation", icon: Sparkles },
  { to: "/financial-health", label: "Health", icon: HeartPulse },
  { to: "/digital-twin", label: "Digital Twin", icon: UserRound },
  { to: "/journey", label: "Journey", icon: GitBranch },
  { to: "/events", label: "Events", icon: Activity },
  { to: "/decision-layer", label: "Decision Layer", icon: Layers3 },
  { to: "/executive", label: "Executive", icon: ChartNoAxesCombined }
];

export function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 glass-grid" />
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-72 border-r border-white/10 bg-black/25 p-5 backdrop-blur-2xl lg:block">
        <NavLink to="/" className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-950">
            <Landmark className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold">SBI Saarthi</p>
            <p className="text-xs text-slate-400">AI Decision Layer</p>
          </div>
        </NavLink>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition",
                  isActive && "bg-white/10 text-white shadow-glow",
                  !isActive && "hover:bg-white/7 hover:text-slate-100"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
          <BrainCircuit className="mb-3 h-5 w-5 text-emerald-300" />
          <p className="text-sm font-semibold">Observe to Execute</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            Every recommendation waits for customer consent.
          </p>
        </div>
      </aside>
      <main className="lg:pl-72">
        <div className="sticky top-0 z-10 border-b border-white/10 bg-black/20 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="rounded-lg border border-white/10 px-3 py-2 text-xs">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
