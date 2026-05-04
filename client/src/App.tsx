import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import LearnMore from "./pages/LearnMore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EarningsDisclaimer from "./pages/EarningsDisclaimer";
import TermsOfService from "./pages/TermsOfService";
import Navbar from "./components/Navbar";
import { useLocation } from "wouter";

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const hideNavbar = location === "/apply";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/learn-more"} component={LearnMore} />
        <Route path={"/apply"} component={Apply} />
        <Route path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route path={"/earnings-disclaimer"} component={EarningsDisclaimer} />
        <Route path={"/terms-of-service"} component={TermsOfService} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
