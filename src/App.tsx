import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import VoiceAgent from "./pages/services/VoiceAgent";
import WebConcierge from "./pages/services/WebConcierge";
import ConversationHub from "./pages/services/ConversationHub";
import InstantResponse from "./pages/services/InstantResponse";
import ReputationGuard from "./pages/services/ReputationGuard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services/voice-agent" element={<VoiceAgent />} />
          <Route path="/services/web-concierge" element={<WebConcierge />} />
          <Route path="/services/conversation-hub" element={<ConversationHub />} />
          <Route path="/services/instant-response" element={<InstantResponse />} />
          <Route path="/services/reputation-guard" element={<ReputationGuard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
