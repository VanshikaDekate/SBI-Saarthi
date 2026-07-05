import { useNavigate } from "react-router-dom";
import { Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Login() {
  const navigate = useNavigate();

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <Card className="w-full max-w-md p-6">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-lg bg-white text-slate-950">
          <Landmark className="h-7 w-7" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to SBI Saarthi</h1>
          <p className="mt-2 text-sm text-slate-400">Demo access for Priya Sharma</p>
        </div>
        <form
          className="mt-8 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/dashboard");
          }}
        >
          <Input defaultValue="priya.sharma" aria-label="Username" placeholder="Username" />
          <Input defaultValue="saarthi-demo" aria-label="Password" placeholder="Password" type="password" />
          <Input defaultValue="482910" aria-label="OTP" placeholder="OTP" />
          <Button className="w-full" size="lg" type="submit">Dummy Login</Button>
        </form>
      </Card>
    </main>
  );
}
