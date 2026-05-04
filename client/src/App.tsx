import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "wouter";

// Lazy load non-critical routes
const Apply = lazy(() => import("./pages/Apply"));
const LearnMore = lazy(() => import("./pages/LearnMore"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const EarningsDisclaimer = lazy(() => import("./pages/EarningsDisclaimer"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const hideNavbar = location === "/apply";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}

function Router() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen" />}>
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
      </Suspense>
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
