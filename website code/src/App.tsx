import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Booking />
      <Footer />
      <Toaster />
    </div>
  );
}
