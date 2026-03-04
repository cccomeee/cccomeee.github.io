import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Diary from "@/pages/Diary";
import DiaryDetail from "@/pages/DiaryDetail";
import Tutorials from "@/pages/Tutorials";
import TutorialDetail from "@/pages/TutorialDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={InsightDetail} />
      <Route path="/diary" component={Diary} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/tutorials/:slug" component={TutorialDetail} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
