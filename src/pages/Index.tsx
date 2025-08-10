
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Plans from '@/components/Plans';
import PlansComparison from '@/components/PlansComparison';
import PriceCalculator from '@/components/PriceCalculator';
import PlatformSimulator from '@/components/PlatformSimulator';
import AppointmentScheduler from '@/components/AppointmentScheduler';
import Target from '@/components/Target';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import BlogSection from '@/components/BlogSection';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-darker-blue font-rethink">
      <ScrollProgress />
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <Technology />
      <Plans />
      <PlansComparison />
      <PriceCalculator />
      <PlatformSimulator />
      <AppointmentScheduler />
      <Target />
      <Testimonials />
      <About />
      <BlogSection />
      <AnalyticsDashboard />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
