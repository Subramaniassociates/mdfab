import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory } from './types';
import IntroScreen from './components/IntroScreen';
import HeroDetailsSection from './components/HeroDetailsSection';
import JourneySection from './components/JourneySection';
import MaterialsShowcase from './components/MaterialsShowcase';
import TeamsSection from './components/TeamsSection';
import ProductCatalog from './components/ProductCatalog';
import FacilitiesSection from './components/FacilitiesSection';
import ContactSection from './components/ContactSection';
import SpecialistSection from './components/SpecialistSection';
import { Factory, Menu, X, Phone, ShieldCheck, Mail } from 'lucide-react';

export default function App() {
  const [preselectedProduct, setPreselectedProduct] = useState<string>('racks');
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Callback to handle adding directly from catalog and scrolling to inquiry form
  const handleAddToQuoteFromCatalog = (cat: ProductCategory) => {
    setPreselectedProduct(cat);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav Links helper
  const navLinks = [
    { label: 'Our Journey', href: '#journey' },
    { label: 'Founder', href: '#team' },
    { label: 'Equipment Catalog', href: '#products' },
    { label: 'Facilities', href: '#facilities-section' },
    { label: 'Specialist Domains', href: '#specialist-section' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-brand-slate-950 font-sans text-white selection:bg-cyan-500/30 selection:text-white overflow-x-clip w-full max-w-full">
      
      {/* 1. Scroll-Linked Convergence Hero Block */}
      <IntroScreen onScrollThreshold={setScrolledPastThreshold} />

      {/* 2. Sticky Glassmorphic Top Navigation Bar */}
      <motion.nav 
        initial={{ y: 0, opacity: 1 }}
        animate={{
          backgroundColor: scrolledPastThreshold ? 'rgba(10, 22, 33, 0.92)' : 'rgba(10, 22, 33, 0.45)',
          backdropFilter: scrolledPastThreshold ? 'blur(16px)' : 'blur(8px)',
          borderBottomColor: scrolledPastThreshold ? 'rgba(56, 174, 189, 0.15)' : 'rgba(56, 174, 189, 0.05)',
          boxShadow: scrolledPastThreshold ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 h-20 z-50 flex items-center border-b print:hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/20 text-cyan-400">
                <Factory className="w-4 h-4 animate-pulse" />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white">
                MDFAB
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold text-brand-slate-300 hover:text-cyan-400 tracking-wider uppercase transition duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action buttons (Cart, Callback, Phone) */}
          <div className="flex items-center gap-3">
            
            {/* Quotation Cart Button with dynamic badge */}
            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="p-2.5 rounded-xl bg-brand-slate-900 hover:bg-brand-slate-800 border border-brand-slate-800 text-brand-slate-200 hover:text-white transition cursor-pointer flex items-center justify-center"
              title="Quick Inquiry"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Quick Contact hotline key */}
            <a
              href="tel:+919443358422"
              className="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 hover:from-cyan-500/20 hover:to-blue-600/20 text-cyan-400 hover:text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/20 transition items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Plant Sales</span>
            </a>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-brand-slate-900 border border-brand-slate-800 text-brand-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </motion.nav>

      {/* 3. Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-brand-slate-950/95 backdrop-blur-xl border-b border-brand-slate-800/80 z-50 py-6 px-4 flex flex-col gap-4 shadow-2xl lg:hidden print:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-brand-slate-900/40 hover:bg-brand-slate-900/80 text-xs font-bold tracking-widest text-brand-slate-200 hover:text-cyan-400 uppercase border border-brand-slate-800/20 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919443358422"
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 font-bold text-xs text-center border border-cyan-500/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Direct Dial: Mr. C. Manjunath
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Scroll-Triggered Revealed Contents Block */}
      <div className="relative z-30 bg-brand-slate-950">
        {/* Precision & Stainless Steel Heavy-Duty Details Section */}
        <HeroDetailsSection />

        {/* Our Journey Interactive Road Map Section */}
        <JourneySection />

        {/* Materials & Laser Video Showcase */}
        <MaterialsShowcase />

        {/* Leadership & Teams Section */}
        <TeamsSection />

        {/* Product Catalog Section */}
        <ProductCatalog onAddToQuote={handleAddToQuoteFromCatalog} />



        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Heavy & Light Duty Fabrication Specialists */}
        <SpecialistSection />

        {/* Official Plant Directions & Contact section */}
        <ContactSection preselectedProduct={preselectedProduct} setPreselectedProduct={setPreselectedProduct} />

        {/* Custom B2B Footer */}
        <footer className="bg-brand-slate-950 border-t border-brand-slate-900 py-12 relative z-10 print:bg-white print:text-black print:border-black print:py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-brand-slate-900 print:hidden">
              
              <div className="md:col-span-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-cyan-950 border border-cyan-500/20 text-cyan-400">
                    <Factory className="w-4 h-4" />
                  </div>
                  <span className="font-display font-extrabold text-lg tracking-wider text-white">
                    MDFAB
                  </span>
                </div>
                <p className="text-xs text-brand-slate-300 leading-relaxed max-w-xs">
                  Premium stainless steel fabrications custom-sized for chemical, healthcare, and sterile storage layouts.
                </p>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-4">
                <div className="text-xs">
                  <span className="text-brand-slate-500 block font-semibold uppercase text-[9px] tracking-wider mb-1">FOUNDER</span>
                  <p className="text-brand-slate-300 font-medium">Mr C. Manjunath</p>
                </div>
                <div className="text-xs">
                  <span className="text-brand-slate-500 block font-semibold uppercase text-[9px] tracking-wider mb-1">REGISTRATION</span>
                  <p className="text-brand-slate-300 font-medium">ISO 9001:2015 Approved</p>
                  <p className="text-brand-slate-300 font-medium">cGMP Autoclave Spec</p>
                </div>
              </div>

              <div className="md:col-span-3 text-left md:text-right text-xs space-y-1">
                <span className="text-brand-slate-500 block font-semibold uppercase text-[9px] tracking-wider mb-1">ESTIMATION DESK</span>
                <p className="text-cyan-400 font-bold font-mono text-sm">+91 9443358422</p>
                <p className="text-brand-slate-400 font-semibold">Plot no.31, Indrapuri layout, Rayakotta road, Hosur</p>
              </div>

            </div>

            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <span>© {new Date().getFullYear()} MDFAB Stainless Steel Fabrication. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2 print:hidden">
                <span>Designed by</span>
                <span className="text-white font-semibold flex items-center gap-0.5">
                  Subramani Associates
                </span>
              </div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
}
