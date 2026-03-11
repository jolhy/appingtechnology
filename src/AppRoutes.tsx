import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import AIMarketing from "./pages/AIMarketing";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import TechnologyVoucher from "./pages/TechnologyVoucher";
import ProfessionalTraining from "./pages/ProfessionalTraining";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/ai-marketing" element={<AIMarketing />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/legal" element={<Legal />} />
    <Route path="/technology-voucher" element={<TechnologyVoucher />} />
    <Route path="/professional-training" element={<ProfessionalTraining />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
