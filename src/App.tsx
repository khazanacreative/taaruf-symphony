
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/ProfileDetail";
import Search from "./pages/Search";
import TaarufRequests from "./pages/TaarufRequests";
import TaarufProcess from "./pages/TaarufProcess";
import MarriageProcess from "./pages/MarriageProcess";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Approvals from "./pages/Approvals";
import Meetings from "./pages/Meetings";
import Articles from "./pages/Articles";
import SuccessStories from "./pages/SuccessStories";
import Settings from "./pages/Settings";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminTaaruf from "./pages/admin/AdminTaaruf";
import AdminContent from "./pages/admin/AdminContent";
import AdminCommunications from "./pages/admin/AdminCommunications";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminFinance from "./pages/admin/AdminFinance";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminReports from "./pages/admin/AdminReports";
import AdminLogs from "./pages/admin/AdminLogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/taaruf-requests" element={<TaarufRequests />} />
          <Route path="/taaruf-process" element={<TaarufProcess />} />
          <Route path="/marriage-process" element={<MarriageProcess />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/taaruf" element={<AdminTaaruf />} />
          <Route path="/admin/content" element={<AdminContent />} />
          <Route path="/admin/communications" element={<AdminCommunications />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/finance" element={<AdminFinance />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
