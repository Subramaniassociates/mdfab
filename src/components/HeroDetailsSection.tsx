import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, Shield, Compass, Cog, Activity } from 'lucide-react';

export default function HeroDetailsSection() {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCustomizer = () => {
    const el = document.getElementById('configurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="details" className="relative py-24 bg-brand-slate-900 border-t border-brand-slate-800/80 overflow-hidden">
      {/* Subtle blueprint grid background for precision engineering theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(143,163,184,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(143,163,184,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* Decorative ambient background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
        >
          
          {/* Left Column (40%): The 4 separate stats/quality highlight boxes */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full order-2 lg:order-1">
            
            {/* Box 1: Premium Materials */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-5 rounded-2xl bg-brand-slate-800/90 border border-brand-slate-700/60 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between h-[140px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-1.5 rounded-lg bg-brand-slate-900 border border-brand-slate-700 text-cyan-400">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">SS 316/304</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-wider font-mono">Premium Materials</h4>
                <p className="text-xs font-bold text-white uppercase mt-0.5">certified alloys</p>
              </div>
            </motion.div>

            {/* Box 2: CAD Precision */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-5 rounded-2xl bg-brand-slate-800/90 border border-brand-slate-700/60 hover:border-blue-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between h-[140px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-1.5 rounded-lg bg-brand-slate-900 border border-brand-slate-700 text-blue-400">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-500/30">3D CAD</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-wider font-mono">CAD Precision</h4>
                <p className="text-xs font-bold text-white uppercase mt-0.5">custom dimension</p>
              </div>
            </motion.div>

            {/* Box 3: TIG Welded */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-5 rounded-2xl bg-brand-slate-800/90 border border-brand-slate-700/60 hover:border-indigo-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between h-[140px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-1.5 rounded-lg bg-brand-slate-900 border border-brand-slate-700 text-indigo-400">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono font-bold text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-500/30">ARGON TIG</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-wider font-mono">TIG Welded</h4>
                <p className="text-xs font-bold text-white uppercase mt-0.5">heavy-duty rating</p>
              </div>
            </motion.div>

            {/* Box 4: Hosur Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-5 rounded-2xl bg-brand-slate-800/90 border border-brand-slate-700/60 hover:border-purple-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between h-[140px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-1.5 rounded-lg bg-brand-slate-900 border border-brand-slate-700 text-purple-400">
                  <Cog className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono font-bold text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-500/30">MADE IN IND</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-wider font-mono">Hosur Hub</h4>
                <p className="text-xs font-bold text-white uppercase mt-0.5">local fabrication</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column (60%): The Copy, beautifully Right-Aligned with matching colors and staggered scroll animations */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right order-1 lg:order-2 overflow-hidden">
            
            {/* Active plant location spark badge (Left-to-Right Animation) */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-slate-700 bg-brand-slate-800/80 backdrop-blur-md text-brand-slate-300 text-xs font-bold tracking-wider uppercase mb-5"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Direct From Hosur Plant Facility
            </motion.div>

            {/* Precision Steel Title (Bottom-to-Top Slide-Up Animation) */}
            <motion.h2 
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 leading-tight font-display uppercase"
            >
              Precision Stainless Steel <br />
              <span className="bg-gradient-to-r from-white via-brand-slate-100 to-brand-slate-300 text-transparent bg-clip-text font-black">
                Heavy-Duty Fabrications
              </span>
            </motion.h2>

            {/* Description Text (Bottom-to-Top Animation with Delay) */}
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-brand-slate-300 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-sans font-medium"
            >
              We manufacture high-end cleanroom SS cupboards, medical grade trolleys, pharmaceutical autoclave storage racks, and heavy duty metal pallets. Engineered to eliminate bacteria-retaining corners and withstand intensive chemical sanitization protocols.
            </motion.p>

            {/* Interactive Call-to-action Buttons (Bottom-to-Top Animation with Delay) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-end gap-4"
            >
              <button
                onClick={scrollToCustomizer}
                className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                Start Customizer
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
              
              <button
                onClick={scrollToProducts}
                className="px-6 py-4 bg-brand-slate-800/85 hover:bg-brand-slate-800 text-brand-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-brand-slate-700/50 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                Browse Products
              </button>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
