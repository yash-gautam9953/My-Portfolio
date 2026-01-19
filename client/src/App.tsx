import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import NotFound from "@/pages/not-found";
import ParticleBackground from "@/components/ParticleBackground";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-background text-foreground">
          <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent animate-gradient-shift pointer-events-none" />
          <ParticleBackground />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
