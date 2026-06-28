import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Sparkles, Sliders } from 'lucide-react';

interface MaterialInfo {
  id: string;
  name: string;
  sub: string;
  badge: string;
  purity: string;
  alloy: string;
  corrosionIndex: string;
  tensileStrength: string;
  optimalFor: string;
  description: string;
  colorClass: string;
  glowingAccent: string;
  glowShadow: string;
  borderColor: string;
  iconColor: string;
  image: string;
}

export default function MaterialsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const materials: MaterialInfo[] = [
    {
      id: 'ss316l',
      name: 'SS 316L (Ultra-High Purity)',
      sub: 'Biomedical & cGMP Acid Grade',
      badge: 'FDA APPROVED',
      purity: '99.9% Sterile Bound',
      alloy: 'Chromium 18% / Nickel 14% / Molybdenum 3%',
      corrosionIndex: 'PREN 25+ (Immune to Chlorine)',
      tensileStrength: '580 MPa Heavy Load',
      optimalFor: 'Pharmaceutical labs, surgical storage, corrosive acid cleanrooms, chemical transport.',
      description: 'The highest standard of low-carbon stainless steel fabrication. Molybdenum additions prevent pitting corrosion from harsh laboratory sterilizing agents and industrial washdowns.',
      colorClass: 'from-cyan-500 to-blue-600',
      glowingAccent: 'rgba(34,211,238,0.35)',
      glowShadow: 'shadow-[0_0_50px_rgba(34,211,238,0.25)]',
      borderColor: 'border-cyan-500/80',
      iconColor: 'text-cyan-400',
      image: '/src/assets/images/ss_cupboard_cleanroom_1782376978140.jpg'
    },
    {
      id: 'ss304',
      name: 'SS 304 (Industrial High-Strength)',
      sub: 'Food & Sterile Storage Standard',
      badge: 'ISO 9001 SPEC',
      purity: '98.8% Food Grade',
      alloy: 'Chromium 18% / Nickel 8%',
      corrosionIndex: 'PREN 19 (High Resistance)',
      tensileStrength: '515 MPa Standard',
      optimalFor: 'Industrial storage racks, commercial heavy-duty utility trolleys, sterile autoclave containers.',
      description: 'The global standard for hygienic stainless steel structures. Offers extreme structural tensile load capacities paired with natural resistance to oxidation and water moisture.',
      colorClass: 'from-blue-400 to-indigo-500',
      glowingAccent: 'rgba(59,130,246,0.35)',
      glowShadow: 'shadow-[0_0_50px_rgba(59,130,246,0.25)]',
      borderColor: 'border-blue-500/80',
      iconColor: 'text-blue-400',
      image: '/src/assets/images/ss_racks_industrial_1782376946271.jpg'
    },
    {
      id: 'electropolish',
      name: 'Electrolytic Mirror Finish',
      sub: 'Bacteria-Proof Level 0 Surface',
      badge: 'AUSTENITIC LEVEL 0',
      purity: '0.08 Ra Super Smooth',
      alloy: 'Acid-Bath Anodic Polish',
      corrosionIndex: 'Maximizes Passive Chromium Oxide',
      tensileStrength: 'Surface Sealed',
      optimalFor: 'Autoclave trays, cleanroom cupboards, hygienic pharma-grade transport bins.',
      description: 'An electrochemical process that strips microscopic peaks from the steel surface, resulting in a mirror-like high gloss. Eliminates micro-crevices where bacteria and mold could harbor.',
      colorClass: 'from-teal-400 to-cyan-500',
      glowingAccent: 'rgba(20,184,166,0.35)',
      glowShadow: 'shadow-[0_0_50px_rgba(20,184,166,0.25)]',
      borderColor: 'border-teal-500/80',
      iconColor: 'text-teal-400',
      image: '/src/assets/images/ss_trolley_premium_1782376962250.jpg'
    },
    {
      id: 'satinbrush',
      name: 'Satin Brushed Finish',
      sub: 'Scratch-Shedding Dual Grain',
      badge: 'HEAVY DUTY ANTI-SCUFF',
      purity: '180 Grit Fine Texture',
      alloy: 'Mechanical Uni-directional Grain',
      corrosionIndex: 'Standard Passivated',
      tensileStrength: 'Anti-Glare Spec',
      optimalFor: 'Heavy duty workshop pallets, logistic cart handles, outer cabinet enclosures.',
      description: 'A robust mechanical brush pattern that hides fingerprints, hairline scuffs, and forklift impact marks. Perfect for high-traffic environments requiring constant manual handling.',
      colorClass: 'from-purple-400 to-indigo-500',
      glowingAccent: 'rgba(168,85,247,0.35)',
      glowShadow: 'shadow-[0_0_50px_rgba(168,85,247,0.25)]',
      borderColor: 'border-purple-500/80',
      iconColor: 'text-purple-400',
      image: '/src/assets/images/ss_metal_pallet_1782376992792.jpg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Scrolled past the top of the section relative to viewport
      const scrolledPastTop = -rect.top;
      const scrollableDistance = sectionHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      let progress = scrolledPastTop / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // Determine active index based on vertical scroll percentage within the section
      const itemProgress = 1 / materials.length;
      let targetIndex = Math.floor(progress / itemProgress);
      if (targetIndex >= materials.length) {
        targetIndex = materials.length - 1;
      }
      setActiveIndex(targetIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [materials.length]);

  const renderMaterialIcon = (id: string, iconColor: string) => {
    switch (id) {
      case 'ss316l':
        return <ShieldCheck className={`w-5 h-5 ${iconColor}`} />;
      case 'ss304':
        return <Cpu className={`w-5 h-5 ${iconColor}`} />;
      case 'electropolish':
        return <Sparkles className={`w-5 h-5 ${iconColor}`} />;
      case 'satinbrush':
        return <Sliders className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <ShieldCheck className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  return (
    <div 
      ref={sectionRef} 
      id="materials-showcase" 
      className="relative bg-[#02060d] text-white border-t border-brand-slate-900 h-[260vh] scroll-mt-20 overflow-visible z-20"
    >
      {/* Sticky container covering the viewport height precisely with zero outer spacing leaks */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-4 md:py-8">
        
        {/* Blueprint grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 z-0 pointer-events-none" />
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-0" />

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 relative z-10 flex flex-col h-[92vh] max-h-[800px] justify-between">
          
          {/* Section Header - very compact */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-2 border-b border-brand-slate-900/60 shrink-0">
            <div className="max-w-2xl space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono uppercase tracking-widest font-extrabold">
                <Sparkles className="w-2.5 h-2.5" />
                METALLURGY SCROLL SHOWCASE (1 IMAGE PER VIEW)
              </div>
              <h2 className="text-xl md:text-3xl font-black font-display text-white uppercase tracking-tight">
                Custom <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Materials & Metallurgy</span>
              </h2>
              <p className="text-slate-300 text-[11px] md:text-xs font-sans font-semibold leading-normal">
                Scroll the page down to cycle materials automatically. Only 1 premium material and its certified properties are highlighted at any time.
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-2 bg-brand-slate-900/40 p-2 rounded-lg border border-brand-slate-800/80 shrink-0">
              <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-[10px] font-black">
                MTC
              </div>
              <div>
                <p className="text-[8px] text-brand-slate-400 uppercase tracking-widest font-extrabold leading-none mb-0.5">CERTIFIED METAL</p>
                <h4 className="text-[11px] font-bold text-white leading-none">Mill Test Certified</h4>
              </div>
            </div>
          </div>

          {/* Progress track labels / pills in same row */}
          <div className="flex gap-1 md:gap-2 py-1.5 justify-center md:justify-start shrink-0 overflow-x-auto scrollbar-none">
            {materials.map((m, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={m.id}
                  className={`px-2.5 py-1 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                      : 'bg-brand-slate-900/30 text-brand-slate-500 border-transparent'
                  }`}
                >
                  0{index + 1}. {m.name.split(' (')[0]}
                </div>
              );
            })}
          </div>

          {/* Slide Stage Container: Side by side layout, animated based on activeIndex */}
          <div className="flex-grow flex items-center justify-center min-h-0 py-1.5">
            <div className="w-full max-w-4xl bg-[#030811] rounded-xl border border-brand-slate-800 p-3.5 md:p-5 lg:p-6 relative overflow-hidden shadow-2xl">
              
              {/* Dynamic light glows based on material color scheme */}
              <div 
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[80px] pointer-events-none z-0 opacity-15 transition-all duration-500" 
                style={{ backgroundColor: materials[activeIndex].glowingAccent }}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center relative z-10 h-full">
                
                {/* Left: Beautifully animated single Image Frame with Slide and Scale */}
                <div className="col-span-1 md:col-span-5 relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden border border-brand-slate-800 shadow-inner bg-brand-slate-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={materials[activeIndex].id}
                      initial={{ x: 60, opacity: 0, scale: 0.98 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ x: -60, opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={materials[activeIndex].image}
                        alt={materials[activeIndex].name}
                        className="w-full h-full object-cover filter brightness-105 contrast-100"
                        referrerPolicy="no-referrer"
                      />
                      {/* Certified tag inside image */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-brand-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded border border-brand-slate-800 font-mono text-[7px] font-bold">
                        <span className="text-cyan-400 uppercase">{materials[activeIndex].badge}</span>
                        <span className="text-white/80">CERTIFIED APPARATUS</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right: Detailed material spec sheet with high density details */}
                <div className="col-span-1 md:col-span-7 flex flex-col justify-between h-full space-y-2 md:space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={materials[activeIndex].id}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-2"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-cyan-400">
                            ★ {materials[activeIndex].purity} ★
                          </span>
                          <div className="p-1 rounded bg-brand-slate-900 border border-brand-slate-800 text-cyan-400">
                            {renderMaterialIcon(materials[activeIndex].id, materials[activeIndex].iconColor)}
                          </div>
                        </div>
                        <h3 className="text-sm md:text-base font-black text-white font-display uppercase tracking-tight leading-none">
                          {materials[activeIndex].name}
                        </h3>
                        <p className="text-[9px] text-brand-slate-400 font-bold uppercase tracking-wider">
                          {materials[activeIndex].sub}
                        </p>
                      </div>

                      <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed font-semibold">
                        {materials[activeIndex].description}
                      </p>

                      {/* Technical specifications table */}
                      <div className="bg-[#010408] p-2.5 rounded border border-brand-slate-800 space-y-1 font-mono text-[9px] md:text-[10px]">
                        <div className="flex justify-between items-center text-slate-200 border-b border-brand-slate-900 pb-0.5">
                          <span className="uppercase text-brand-slate-500 text-[8px]">Alloy Composition:</span>
                          <span className="text-white font-bold text-right truncate max-w-[200px]">{materials[activeIndex].alloy}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-200 border-b border-brand-slate-900 pb-0.5">
                          <span className="uppercase text-cyan-400 text-[8px]">Corrosion Resistance:</span>
                          <span className="text-cyan-300 font-bold text-right truncate max-w-[200px]">{materials[activeIndex].corrosionIndex}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-200">
                          <span className="uppercase text-brand-slate-500 text-[8px]">Tensile Strength:</span>
                          <span className="text-white font-bold text-right">{materials[activeIndex].tensileStrength}</span>
                        </div>
                      </div>

                      <div className="p-2 bg-cyan-950/20 border border-cyan-500/20 rounded">
                        <span className="text-[8px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-0.5">Optimal Practical Application:</span>
                        <p className="text-[9px] md:text-[10px] text-slate-200 font-bold font-sans leading-snug">
                          {materials[activeIndex].optimalFor}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom active indicators with visual tracking */}
          <div className="flex justify-center gap-1 pb-1 shrink-0">
            {materials.map((_, idx) => {
              const progressSegment = 1 / materials.length;
              const start = idx * progressSegment;
              const end = (idx + 1) * progressSegment;
              let fillWidth = 0;
              if (scrollProgress >= end) {
                fillWidth = 100;
              } else if (scrollProgress >= start) {
                fillWidth = ((scrollProgress - start) / progressSegment) * 100;
              }

              return (
                <div
                  key={idx}
                  className="w-10 h-1 rounded-full bg-brand-slate-900 overflow-hidden relative border border-brand-slate-800"
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-cyan-400 transition-all duration-100"
                    style={{ width: `${fillWidth}%` }}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
