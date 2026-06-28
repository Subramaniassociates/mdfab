import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Flame, 
  Scissors, 
  Grid, 
  Wrench, 
  RotateCw, 
  FolderSync 
} from 'lucide-react';

interface FacilityItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  specs: { label: string; value: string }[];
  description: string;
  capacity: string;
}

export default function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>('press');

  const items: FacilityItem[] = [
    {
      id: 'press',
      name: 'Press Machines',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      capacity: 'Up to 500 Tons',
      description: 'High-tonnage hydraulic and mechanical press systems engineered for heavy plate stamping, blanking, and deep-draw sheet metal forming. Ideal for rigid structural panels and automotive parts.',
      specs: [
        { label: 'Max Pressure', value: '500 Tons Force' },
        { label: 'Table Size', value: '2500 x 1500 mm' },
        { label: 'Control Feed', value: 'Pneumatic Auto-Coiler' }
      ]
    },
    {
      id: 'bending',
      name: 'Bending Machines',
      icon: <FolderSync className="w-5 h-5 text-blue-400" />,
      capacity: 'CNC 120 Ton Press Brake',
      description: 'Multi-axis CNC synchronized bending stations delivering micron-level folding tolerances. Eliminates mechanical surface scuffing to protect sanitary laboratory cupboard frames.',
      specs: [
        { label: 'Bend Length', value: '3200 mm Maximum' },
        { label: 'Control Accuracy', value: '±0.05 mm Multi-Axis' },
        { label: 'Tooling', value: 'Anti-marking Polyurethane inserts' }
      ]
    },
    {
      id: 'cutting',
      name: 'Cutting Machines',
      icon: <Scissors className="w-5 h-5 text-teal-400" />,
      capacity: '6kW Fiber Laser Lines',
      description: 'Ultra-high-speed fiber laser cutters and heavy-duty mechanical shearers. Pure liquid nitrogen process gases are used to provide perfectly passivated, mirror-smooth edges with zero burrs.',
      specs: [
        { label: 'Laser Power', value: '6000 Watts' },
        { label: 'Max Thickness', value: '16 mm Stainless Steel' },
        { label: 'Precision Kerf', value: '±0.02 mm' }
      ]
    },
    {
      id: 'welding',
      name: 'Welding Stations',
      icon: <Flame className="w-5 h-5 text-purple-400" />,
      capacity: 'Orbital & High-Frequency TIG',
      description: 'Continuous continuous-integrity argon gas-purged welding terminals. Delivers sanitary, sterile, biomedical-grade weld beads meeting stringent food & pharmaceutical specifications.',
      specs: [
        { label: 'Welding Types', value: 'Pulse TIG, MIG, Spot & Orbital' },
        { label: 'Argon Shielding', value: 'Ultra-Pure 6.0 Backup Purge' },
        { label: 'Standards', value: 'ASME Sec IX Welder Certified' }
      ]
    },
    {
      id: 'lathe',
      name: 'Lathe Machines',
      icon: <RotateCw className="w-5 h-5 text-indigo-400" />,
      capacity: 'Precision CNC Turning',
      description: 'Heavy-duty turning centers for custom fabrication of stainless steel shafts, wheel hubs, sanitary fittings, and dense structural pins with absolute concentricity.',
      specs: [
        { label: 'Max Swing', value: 'Ø350 mm Diameter' },
        { label: 'Turning Length', value: '750 mm Continuous' },
        { label: 'Concentricity', value: '0.005 mm Sub-micron' }
      ]
    },
    {
      id: 'drilling',
      name: 'Drilling Machines',
      icon: <Grid className="w-5 h-5 text-amber-400" />,
      capacity: 'Multi-Spindle CNC Boring',
      description: 'Multi-axis automated drilling and boring units. Fast, perfectly-aligned hole arrays are punched through structural channels, pallets, and backing plates with rigid internal tool cooling.',
      specs: [
        { label: 'Thread Range', value: 'M4 up to M30 Rigid Tapping' },
        { label: 'Spindle Heads', value: 'Twin CNC Head Synchronous' },
        { label: 'Hole Tolerance', value: 'H7 Medical Grade' }
      ]
    }
  ];

  const activeItem = items.find(i => i.id === activeTab) || items[0];

  return (
    <section id="facilities-section" className="relative bg-[#02050b] text-white py-20 border-t border-brand-slate-900 scroll-mt-20 overflow-hidden">
      
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-extrabold">
            <Wrench className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            INDUSTRIAL MACHINING INFRASTRUCTURE
          </div>
          <h2 className="text-2xl md:text-4xl font-black font-display text-white uppercase tracking-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Facilities</span>
          </h2>
          <p className="text-slate-300 text-xs md:text-sm font-sans font-semibold leading-relaxed">
            MDFAB operates a certified, state-of-the-art facility equipped for complex precision metal forming, high-power cutting, and specialized sterile welding.
          </p>
        </div>

        {/* Tab & Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Tab selection rail */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-2.5">
            {items.map((it) => {
              const isSelected = activeTab === it.id;
              return (
                <button
                  key={it.id}
                  onClick={() => setActiveTab(it.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0a1124] border-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                      : 'bg-brand-slate-950/40 border-brand-slate-900/80 text-slate-400 hover:text-white hover:border-brand-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-950' : 'bg-brand-slate-900'}`}>
                      {it.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider">{it.name}</h4>
                      <span className="text-[9px] font-mono text-slate-400">{it.capacity}</span>
                    </div>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? 'bg-cyan-400' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Machine Cell detail sheet */}
          <div className="col-span-1 lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#030812] rounded-2xl border border-brand-slate-800 p-5 md:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                {/* Visual accent glows inside */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4 pb-3 border-b border-brand-slate-900">
                    <div>
                      <span className="text-[8px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-0.5">
                        ✓ PLANT WORKSPACE OPERATIONAL
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-white font-display uppercase tracking-tight">
                        {activeItem.name} Cell
                      </h3>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-brand-slate-950 border border-brand-slate-800 font-mono text-[9px] text-cyan-300 font-bold uppercase shrink-0">
                      {activeItem.capacity}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    {activeItem.description}
                  </p>
                </div>

                {/* Specification Grid */}
                <div className="mt-5 pt-4 border-t border-brand-slate-900/60">
                  <p className="text-[9px] font-mono font-bold text-brand-slate-500 uppercase tracking-widest mb-2.5">
                    Plant Technical Specifications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeItem.specs.map((sp, idx) => (
                      <div key={idx} className="bg-brand-slate-950/60 p-2.5 rounded border border-brand-slate-900 font-mono text-[10px]">
                        <span className="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">{sp.label}</span>
                        <span className="text-white font-black">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
