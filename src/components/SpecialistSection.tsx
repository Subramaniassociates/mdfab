import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Layers, Activity, Sparkles, Settings } from 'lucide-react';

export default function SpecialistSection() {
  const specialists = [
    {
      id: 'fixtures',
      icon: <Settings className="w-6 h-6 text-cyan-400" />,
      title: 'Structural Fixtures & Jigs',
      sub: 'Machining, Welding & Assembly Operations',
      desc: 'High-rigidity mechanical fixtures, positioners, and heavy-duty assembly jigs designed to support massive robotic welding cells or manual frame matching. Precision engineered to avoid structural deflection.',
      badge: 'SUB-MICRON SPEC'
    },
    {
      id: 'industrial',
      icon: <Truck className="w-6 h-6 text-blue-400" />,
      title: 'Logistics & Heavy Material Handling',
      sub: 'Industrial Trolleys, Pallets & Flow Racks',
      desc: 'Heavy-duty steel pallets, ergonomic transport trolleys, multi-tier flow racks, and custom turning columns. Crafted with reinforced joint welds and smooth polyurethane rolling systems.',
      badge: 'LOAD-CERTIFIED'
    },
    {
      id: 'sheetmetal',
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      title: 'Precision Sheet Metal & Press Products',
      sub: 'Two-Wheeler, Three-Wheeler & Four-Wheeler Components',
      desc: 'High-volume production-grade automotive stampings, custom chassis brackets, and dense steel profiles. Built with automated tooling lines for global vehicle manufacturers.',
      badge: 'OEM EXCELLENCE'
    }
  ];

  return (
    <section id="specialist-section" className="relative bg-[#02050b] text-white py-24 border-t border-brand-slate-900 overflow-hidden">
      
      {/* Dynamic structural background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-45 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand-slate-900/60 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-extrabold animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              Heavy & Light Duty Fabrication Works
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Specialist Domains</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-sans font-semibold leading-relaxed">
              We specialize in custom structural fixtures, industrial logistics systems, and precision high-volume automotive sheet metal fabrication.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-brand-slate-900/40 p-4 rounded-xl border border-brand-slate-800/80 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] text-brand-slate-400 uppercase tracking-widest font-extrabold leading-none mb-1">CAPABILITY VALUE</p>
              <h4 className="text-sm font-bold text-white leading-none">A-Tier OEM Supplier</h4>
            </div>
          </div>
        </div>

        {/* Specialized Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialists.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-[#030811] rounded-2xl border border-brand-slate-900/80 p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-brand-slate-900 group-hover:bg-cyan-950/50 group-hover:text-cyan-400 transition-colors duration-300">
                    {spec.icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/10">
                    {spec.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black font-display text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-brand-slate-400 font-bold uppercase tracking-wider leading-snug">
                    {spec.sub}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {spec.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-slate-900 flex items-center gap-2 text-[10px] font-mono text-cyan-400 font-extrabold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>MDFAB GUARANTEED FIT</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
