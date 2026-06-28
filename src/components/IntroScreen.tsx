import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Flame, Target, Sparkles, Activity, ShieldCheck, Hammer, Sparkle } from 'lucide-react';

interface IntroScreenProps {
  onScrollThreshold: (pastThreshold: boolean) => void;
}

// Import images for Vite
import ssCupboardImg from '/src/assets/images/ss_cupboard_cleanroom_1782376978140.jpg';
import ssRacksImg from '/src/assets/images/ss_racks_industrial_1782376946271.jpg';
import ssTrolleyImg from '/src/assets/images/ss_trolley_premium_1782376962250.jpg';
import ssPalletImg from '/src/assets/images/ss_metal_pallet_1782376992792.jpg';
import welderImg from '/src/assets/images/welder_fabricator_custom_1782377704509.jpg';

const previewProducts = [
  {
    id: 'a',
    title: 'Cleanroom SS Cupboards',
    img: ssCupboardImg,
    desc: 'Hygienic storage setups for pharmaceutical labs.',
  },
  {
    id: 'b',
    title: 'Autoclave SS Racks',
    img: ssRacksImg,
    desc: 'Heavy-duty multi-tier shelving units.',
  },
  {
    id: 'c',
    title: 'Medical Hygienic Trolleys',
    img: ssTrolleyImg,
    desc: 'Sterile grade stainless steel mobility.',
  },
  {
    id: 'd',
    title: 'Heavy-Duty SS Pallets',
    img: ssPalletImg,
    desc: 'Corrosion-proof load-bearing steel platforms.',
  },
  {
    id: 'e',
    title: 'Custom Fabrications',
    img: welderImg,
    desc: 'Bespoke designs built to precise layout blueprints.',
  }
];

type Phase = 'hero' | 'vision' | 'mission' | 'policy' | 'images';

export default function IntroScreen({ onScrollThreshold }: IntroScreenProps) {
  const [activePhase, setActivePhase] = useState<Phase>('hero');
  const [showDots, setShowDots] = useState<boolean>(true);

  // Simply call onScrollThreshold when window scrolled past 150
  useEffect(() => {
    const handleScroll = () => {
      onScrollThreshold(window.scrollY > 150);
      
      // Hide navigation dots when scrolled past the intro screen sequence (approx 4.2 screen heights)
      const introEnd = window.innerHeight * 4.2;
      if (window.scrollY > introEnd) {
        setShowDots(false);
      } else {
        setShowDots(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollThreshold]);

  // Handle active phase tracking via high precision IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px', // focused center band
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'intro-hero') setActivePhase('hero');
          else if (id === 'intro-vision') setActivePhase('vision');
          else if (id === 'intro-mission') setActivePhase('mission');
          else if (id === 'intro-policy') setActivePhase('policy');
          else if (id === 'intro-images') setActivePhase('images');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['intro-hero', 'intro-vision', 'intro-mission', 'intro-policy', 'intro-images'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const isHero = activePhase === 'hero';
  const letters = ["M", "D", "F", "A", "B"];

  return (
    <div className="relative w-full bg-[#02060d] text-white selection:bg-cyan-500/30">
      
      {/* ==========================================
          DYNAMIC FIXED CINEMATIC BACKGROUND
          ========================================== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out"
          style={{ 
            filter: isHero ? 'blur(0px)' : 'blur(12px)',
            opacity: isHero ? 0.6 : 0.2,
            transform: isHero ? 'scale(1.00)' : 'scale(1.05)'
          }} 
        >
          <img
            src={welderImg}
            alt="MDFAB High Precision Welding Facility"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Ambient shading vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02060d] via-[#02060d]/60 to-black/85" />
        </div>

        {/* Glowing Laser Argon Flares */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[250px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse z-10" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[250px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse z-10" style={{ animationDuration: '5s' }} />

        {/* Blueprint Coordinate Grids */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:40px_40px] z-10 transition-opacity duration-1000"
          style={{ opacity: isHero ? 0.03 : 0.07 }}
        />
      </div>

      {/* ==========================================
          SEQUENTIAL SCROLL-REVEAL HOMEPAGE SECTIONS
          ========================================== */}

      {/* 1. HERO SECTION */}
      <section 
        id="intro-hero" 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl w-full flex flex-col items-center justify-center space-y-6"
        >
          {/* Badge element removed as requested */}

          <div className="flex items-center justify-center">
            {letters.map((char, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-b from-white via-cyan-50 to-brand-slate-300 text-transparent bg-clip-text font-black tracking-normal font-display"
                style={{
                  fontSize: 'clamp(3.8rem, 12vw, 8.8rem)',
                  textShadow: '0 8px 32px rgba(0,0,0,0.9)',
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <p className="text-brand-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-sans font-medium tracking-tight leading-relaxed">
            Custom-sized sanitary, cleanroom, and sterile equipment built precisely to your layouts. Engineered at our specialized manufacturing facility in Hosur, Tamil Nadu.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={() => scrollToSection('intro-vision')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Core Philosophy</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <a
              href="#products"
              className="px-6 py-3 bg-brand-slate-900/80 hover:bg-brand-slate-800 border border-brand-slate-800 text-brand-slate-200 hover:text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300"
            >
              View Equipment Catalog
            </a>
          </div>

          <div className="pt-8 text-center cursor-pointer" onClick={() => scrollToSection('intro-vision')}>
            <p className="text-[9px] tracking-widest text-cyan-400 uppercase mb-2 font-bold flex items-center gap-1 justify-center">
              <Hammer className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              Scroll to Begin Journey
            </p>
            <div className="w-5 h-8 rounded-full border-2 border-brand-slate-700 flex items-start justify-center p-1 mx-auto">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. VISION SECTION */}
      <section 
        id="intro-vision" 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl w-full"
        >
          {/* White Glitter Premium Plate */}
          <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.75),0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 via-white via-amber-100 to-white animate-pulse" style={{ animationDuration: '3s' }} />
            
            <div className="relative bg-white/95 backdrop-blur-2xl text-slate-900 rounded-[21.5px] p-6 sm:p-10 space-y-6">
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 p-2 rounded-full shadow-lg border border-white flex items-center justify-center">
                <Sparkle className="w-4 h-4 text-amber-700 fill-amber-700 animate-spin" style={{ animationDuration: '5s' }} />
              </div>

              <div className="flex items-center gap-4 pb-4 border-b border-zinc-200">
                <div className="p-3 rounded-xl bg-slate-100 border border-zinc-300 text-slate-800 shrink-0">
                  <Target className="w-8 h-8 text-cyan-600 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-cyan-600 font-black uppercase font-mono block">OUR DIRECTION</span>
                  <h3 className="text-xl font-black text-slate-950 font-display tracking-tight uppercase">
                    VISION STATEMENT
                  </h3>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-zinc-200/80 shadow-inner">
                <p className="text-slate-900 text-lg sm:text-xl leading-relaxed font-sans font-extrabold text-center italic">
                  “To be the preferred supplier of All auto component and steel fabrication solutions.”
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] text-slate-500 font-mono font-bold">
                <span className="flex items-center gap-1 text-cyan-600">
                  ★ MDFAB APPROVED INTEGRITY ★
                </span>
                <span className="text-slate-400">HOSUR REGION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. MISSION SECTION */}
      <section 
        id="intro-mission" 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl w-full"
        >
          <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.75),0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 via-white via-amber-100 to-white animate-pulse" style={{ animationDuration: '3.5s' }} />
            
            <div className="relative bg-white/95 backdrop-blur-2xl text-slate-900 rounded-[21.5px] p-6 sm:p-10 space-y-6">
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 p-2 rounded-full shadow-lg border border-white flex items-center justify-center">
                <Sparkle className="w-4 h-4 text-amber-700 fill-amber-700 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <div className="flex items-center gap-4 pb-4 border-b border-zinc-200">
                <div className="p-3 rounded-xl bg-slate-100 border border-zinc-300 text-slate-800 shrink-0">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-purple-600 font-black uppercase font-mono block">OUR PLEDGE</span>
                  <h3 className="text-xl font-black text-slate-950 font-display tracking-tight uppercase">
                    MISSION STATEMENT
                  </h3>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-zinc-200/80 shadow-inner space-y-3">
                <p className="text-purple-600 font-black text-xs sm:text-sm uppercase tracking-widest text-center">
                  We don’t do average!
                </p>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-sans font-extrabold text-center">
                  We deliver first-rate solutions. We employ class-leading expertise. It’s not just what we do, but how we do it.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] text-slate-500 font-mono font-bold">
                <span className="flex items-center gap-1 text-purple-600">
                  ★ CLASS-LEADING SERVICE ★
                </span>
                <span className="text-slate-400">PREMIER RATING</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. QUALITY POLICY SECTION */}
      <section 
        id="intro-policy" 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl w-full"
        >
          <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.85),0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 via-white via-emerald-100 to-white animate-pulse" style={{ animationDuration: '4s' }} />
            
            <div className="relative bg-white/95 backdrop-blur-2xl text-slate-900 rounded-[21.5px] p-5 sm:p-8 space-y-5">
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 p-2 rounded-full shadow-lg border border-white flex items-center justify-center">
                <Sparkle className="w-4 h-4 text-amber-700 fill-amber-700 animate-spin" style={{ animationDuration: '7s' }} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                    <ShieldCheck className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest text-emerald-600 font-black uppercase font-mono block">MDFAB COMMITMENT</span>
                    <h3 className="text-lg font-black text-slate-950 font-display tracking-tight uppercase">
                      OUR QUALITY POLICY
                    </h3>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-emerald-600 font-black text-[10px] uppercase tracking-wider">
                    TOTAL INTEGRITY
                  </p>
                  <p className="text-[9px] text-slate-500 font-mono font-bold">ISO 9001:2015 APPROVED</p>
                </div>
              </div>

              {/* Exquisite custom layout for user-specific blockquote */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-zinc-200 shadow-inner space-y-3.5 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-black uppercase tracking-wider">
                  ★ COMMITMENT STATEMENT ★
                </span>
                
                <div className="text-slate-900 text-sm sm:text-base leading-relaxed font-sans font-extrabold space-y-3">
                  <p className="italic text-slate-700">
                    MD fab manufacturing auto component parts has quality policy committing to, achieve
                  </p>
                  <p className="text-base sm:text-lg font-black text-emerald-700 tracking-tight uppercase bg-emerald-100/50 px-4 py-1.5 rounded-lg border border-emerald-200 inline-block">
                    "TOTAL CUSTOMER SATISFACTION"
                  </p>
                  <p className="italic text-slate-700">
                    By providing
                  </p>
                  <p className="text-sm sm:text-base font-black text-slate-950 uppercase decoration-emerald-500 decoration-2 underline underline-offset-4">
                    BEST QUALITY of service both in quality & Delivery
                  </p>
                  <p className="italic text-slate-700 text-xs sm:text-sm">
                    by meeting or exceeding customer expectations through complying with all applicable requirements and continual improvement of the quality management system with respect to context of the organization and its strategic direction.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] text-slate-500 font-mono">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  ★ QUALITY & TIMELY DELIVERY APPROVED ★
                </span>
                <span className="text-slate-400 font-bold">HOSUR REGION, TAMIL NADU</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. EQUIPMENT IMAGES SECTION */}
      <section 
        id="intro-images" 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl w-full"
        >
          <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.75),0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 via-white via-amber-100 to-white animate-pulse" style={{ animationDuration: '4.5s' }} />
            
            <div className="relative bg-white/95 text-slate-900 rounded-[21.5px] p-5 lg:p-6 space-y-4">
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 p-2 rounded-full shadow-lg border border-white flex items-center justify-center">
                <Sparkle className="w-4 h-4 text-amber-700 fill-amber-700 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 border border-zinc-300 text-slate-800 shrink-0">
                    <Activity className="w-6 h-6 text-cyan-600 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest text-cyan-600 font-black uppercase font-mono block">MDFAB COMPONENT SELECTOR</span>
                    <h3 className="text-base font-black text-slate-950 font-display tracking-tight uppercase">
                      OUR HIGH PURITY EQUIPMENT LINEUP
                    </h3>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 font-mono text-[9px] font-black uppercase tracking-widest">
                    ★ cGMP CERTIFIED ★
                  </span>
                </div>
              </div>

              {/* Grid of the 5 images */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 pt-1">
                {previewProducts.map((p) => (
                  <div 
                    key={p.id}
                    className="group p-2.5 bg-slate-50 border border-zinc-200 hover:border-cyan-500/60 rounded-xl shadow-sm transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Perfect Image Frame */}
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-slate-950 border border-zinc-200">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                      </div>
                      
                      <span className="text-[7.5px] font-mono text-cyan-600 font-black uppercase tracking-widest block mb-0.5">
                        CODE {p.id.toUpperCase()}
                      </span>
                      
                      <h4 className="text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-tight truncate group-hover:text-cyan-600 transition-colors">
                        {p.title}
                      </h4>
                      
                      <p className="text-[8.5px] text-slate-500 font-bold leading-tight mt-1 line-clamp-2">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 mt-2 flex items-center justify-between text-[8px] text-slate-400 font-mono font-bold">
                      <span className="text-cyan-600">STAINLESS</span>
                      <span>MDFAB</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-slate-400 font-black">
                  SCROLL DOWN TO PROCEED TO DETAILED HISTORIC JOURNEY
                </span>
                <span className="text-cyan-600 font-black">HOSUR MANUFACTURING FACILITY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          ELEGANT FIXED SIDE-DOTS NAVIGATION INDICATOR
          ========================================== */}
      <AnimatePresence>
        {showDots && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-40"
          >
            {(['hero', 'vision', 'mission', 'policy', 'images'] as Phase[]).map((phase) => {
              const isActive = activePhase === phase;
              const targetId = `intro-${phase}`;
              return (
                <button
                  key={phase}
                  onClick={() => scrollToSection(targetId)}
                  className="group relative flex items-center justify-end h-5 w-5 outline-none cursor-pointer text-left"
                  title={`Go to ${phase.toUpperCase()}`}
                >
                  {/* Tooltip on hover */}
                  <span className="absolute right-7 py-0.5 px-2 rounded bg-black/85 border border-brand-slate-800 text-[8px] sm:text-[10px] text-slate-200 font-mono font-extrabold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none select-none">
                    {phase === 'policy' ? 'Quality Policy' : phase}
                  </span>

                  {/* Outer Ring */}
                  <span 
                    className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                      isActive 
                        ? 'border-white scale-100 opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                        : 'border-white/10 scale-50 opacity-40 group-hover:scale-75 group-hover:opacity-75'
                    }`}
                  />

                  {/* Inner Dot */}
                  <span 
                    className={`w-1.5 h-1.5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-cyan-400 scale-100' 
                        : 'bg-white/40 scale-75 group-hover:bg-cyan-300'
                    }`}
                  />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}