import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Dashboard } from "@/pages/Dashboard";
import { DecisionLayer } from "@/pages/DecisionLayer";
import { DigitalTwin } from "@/pages/DigitalTwin";
import { EventCenter } from "@/pages/EventCenter";
import { ExecutiveDashboard } from "@/pages/ExecutiveDashboard";
import { FinancialHealth } from "@/pages/FinancialHealth";
import { Journey } from "@/pages/Journey";
import { Landing } from "@/pages/Landing";
import { Login } from "@/pages/Login";
import { Recommendation } from "@/pages/Recommendation";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/financial-health" element={<FinancialHealth />} />
        <Route path="/digital-twin" element={<DigitalTwin />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/events" element={<EventCenter />} />
        <Route path="/decision-layer" element={<DecisionLayer />} />
        <Route path="/executive" element={<ExecutiveDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
