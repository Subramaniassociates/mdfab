import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Milestone, 
  MapPin, 
  TrendingUp, 
  Layers, 
  Users, 
  LineChart,
  Cpu, 
  ArrowRight, 
  Building, 
  Award,
  Sparkles
} from 'lucide-react';

interface MilestoneData {
  year: number;
  area: string;
  areaVal: number;
  employees: string;
  employeesVal: number;
  turnover: string;
  turnoverVal: number;
  title: string;
  description: string;
  aiInsight: string;
  pinColor: string;
  glowColor: string;
  textColor: string;
  // Positioning for desktop SVG road map
  pinX: number;
  pinY: number;
  cardX: number;
  cardY: number;
  cardAlign: 'left' | 'right' | 'top' | 'bottom';
}

const journeyData: MilestoneData[] = [
  {
    year: 2000,
    area: "90 sqft",
    areaVal: 90,
    employees: "5",
    employeesVal: 5,
    turnover: "0.75 L",
    turnoverVal: 0.75,
    title: "The Genesis Spark",
    description: "MDFAB launches operations in a micro-footprint workshop in Hosur, delivering highly accurate, custom hand-welded steel assemblies with precision engineering at its core.",
    aiInsight: "Initial micro-foundry prototype setup. Extremely lean setup with high per-capita skill ratios.",
    pinColor: "#ef4444", // Reddish
    glowColor: "rgba(239, 68, 68, 0.45)",
    textColor: "text-red-400",
    pinX: 250,
    pinY: 100,
    cardX: 40,
    cardY: 30,
    cardAlign: 'left'
  },
  {
    year: 2005,
    area: "2000 sqft",
    areaVal: 2000,
    employees: "45",
    employeesVal: 45,
    turnover: "40.00 L",
    turnoverVal: 40.00,
    title: "First Scaling Leap",
    description: "Expansion of workshop space to 2,000 sqft and scaling of direct manufacturing staff to 45 personnel, establishing dedicated structural fabrication pipelines for key auto OEMs.",
    aiInsight: "First capacity inflection point. Factory floor space expanded by 22x; employee count increased 9x to handle bulk component contracts.",
    pinColor: "#84cc16", // Lime-Green
    glowColor: "rgba(132, 204, 22, 0.45)",
    textColor: "text-lime-400",
    pinX: 460,
    pinY: 180,
    cardX: 540,
    cardY: 110,
    cardAlign: 'right'
  },
  {
    year: 2010,
    area: "6400 sqft",
    areaVal: 6400,
    employees: "45",
    employeesVal: 45,
    turnover: "139.00 L",
    turnoverVal: 139.00,
    title: "Automotive Precision Upgrade",
    description: "Substantial capital infusion to scale real estate to 6,400 sqft. Installed specialized tooling fixtures and automated metal stamping press jigs to cater to precision-heavy auto components.",
    aiInsight: "Turnover escalated by 247% since 2005. Strategic decision to stabilize team size at 45 while aggressively scaling mechanical tooling leverage.",
    pinColor: "#f97316", // Orange
    glowColor: "rgba(249, 115, 22, 0.45)",
    textColor: "text-orange-400",
    pinX: 340,
    pinY: 330,
    cardX: 60,
    cardY: 290,
    cardAlign: 'left'
  },
  {
    year: 2015,
    area: "6750 sqft",
    areaVal: 6750,
    employees: "45",
    employeesVal: 45,
    turnover: "358.00 L",
    turnoverVal: 358.00,
    title: "Technological Overhaul",
    description: "Expansion of plant floor to 6,750 sqft. Integrated premium digital QA sensors and premium semi-automated welding stations, shifting focus to high-value-add complex structural parts.",
    aiInsight: "Operational efficiency breakthrough. Turnover increased by 157% to 358 Lakhs with a static headcount, indicating stellar automation integration.",
    pinColor: "#a855f7", // Purple
    glowColor: "rgba(168, 85, 247, 0.45)",
    textColor: "text-purple-400",
    pinX: 520,
    pinY: 450,
    cardX: 600,
    cardY: 380,
    cardAlign: 'right'
  },
  {
    year: 2020,
    area: "10000 sqft",
    areaVal: 10000,
    employees: "50",
    employeesVal: 50,
    turnover: "570.00 L",
    turnoverVal: 570.00,
    title: "Smart Mega Facility",
    description: "Transitioned to a state-of-the-art 10,000 sqft mega-facility. Added heavy hydraulic shear presses, CNC laser sheet systems, and optimized logistics bays for lightning-fast OEM logistics.",
    aiInsight: "Peak strategic performance. Achieving 570 Lakhs in annual turnover, marking a spectacular 760x growth trajectory since inception.",
    pinColor: "#22d3ee", // Cyan
    glowColor: "rgba(34, 211, 238, 0.45)",
    textColor: "text-cyan-400",
    pinX: 740,
    pinY: 580,
    cardX: 430,
    cardY: 570,
    cardAlign: 'left'
  }
];

export default function JourneySection() {
  const [selectedYear, setSelectedYear] = useState<number>(2020);
  const currentMilestone = journeyData.find(m => m.year === selectedYear) || journeyData[4];

  return (
    <section id="journey" className="relative py-24 bg-brand-slate-950 border-t border-brand-slate-900 overflow-hidden">
      {/* Decorative Blueprint Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.012)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />
      
      {/* Subtle glowing spheres */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-extrabold animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              MDFAB Evolution Timeline
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">JOURNEY</span>
            </h2>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl font-semibold leading-relaxed">
              Explore the explosive scaling trajectory of MDFAB. From a microscopic 90 sqft spark to a highly digitized, ISO-registered 10,000 sqft sheet metal and automotive powerhouse.
            </p>
          </div>

          {/* Core Stats Overview Badge */}
          <div className="flex items-center gap-4 bg-brand-slate-900/80 border border-brand-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-brand-slate-400 block font-bold">Overall Expansion</span>
              <span className="text-xl font-black text-white font-mono tracking-tight block">
                +111x Area <span className="text-cyan-400">|</span> +760x Revenue
              </span>
            </div>
          </div>
        </motion.div>

        {/* YEAR SELECTOR TABS FOR QUICK INTERACTIVE CONTROL */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12"
        >
          {journeyData.map((m) => {
            const isSelected = m.year === selectedYear;
            return (
              <button
                key={m.year}
                onClick={() => setSelectedYear(m.year)}
                className={`relative px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/45 shadow-[0_0_20px_rgba(34,211,238,0.15)] font-display' 
                    : 'bg-brand-slate-900/60 text-brand-slate-400 border-brand-slate-800/80 hover:text-white hover:bg-brand-slate-800/60'
                }`}
              >
                <div 
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: isSelected ? m.pinColor : '#475569' }}
                />
                <span>{m.year}</span>
              </button>
            );
          })}
        </motion.div>

        {/* DESKTOP blue-print vector roadmap curve (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden xl:block relative w-full h-[660px] bg-brand-slate-900/20 border border-brand-slate-900 rounded-3xl overflow-hidden p-4"
        >
          
          {/* Real-time Roadmap Grid line backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,47,73,0.15),transparent)] pointer-events-none" />

          {/* SVG Road Pathway */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Ambient Outer Road Glow */}
            <path 
              d="M 180,80 C 450,20 540,160 480,240 C 420,320 230,340 280,470 C 330,600 780,550 880,550" 
              fill="none" 
              stroke="rgba(34, 211, 238, 0.05)" 
              strokeWidth="56" 
              strokeLinecap="round" 
            />
            {/* Road Base Metal Tar */}
            <path 
              d="M 180,80 C 450,20 540,160 480,240 C 420,320 230,340 280,470 C 330,600 780,550 880,550" 
              fill="none" 
              stroke="#0f1e2e" 
              strokeWidth="44" 
              strokeLinecap="round" 
            />
            {/* Center Dash Highway Lanes */}
            <path 
              d="M 180,80 C 450,20 540,160 480,240 C 420,320 230,340 280,470 C 330,600 780,550 880,550" 
              fill="none" 
              stroke="#1e3a5f" 
              strokeWidth="4" 
              strokeDasharray="10 10" 
              strokeLinecap="round" 
            />
            {/* Active Highlight flow */}
            <motion.path 
              d="M 180,80 C 450,20 540,160 480,240 C 420,320 230,340 280,470 C 330,600 780,550 880,550" 
              fill="none" 
              stroke="url(#roadGradient)" 
              strokeWidth="3" 
              strokeDasharray="14 10"
              className="animate-[dash_20s_linear_infinite]"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="25%" stopColor="#84cc16" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="75%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          {/* SVG Road pins & labels mapped coordinates */}
          {journeyData.map((m) => {
            const isSelected = m.year === selectedYear;
            return (
              <div 
                key={m.year}
                className="absolute z-20 cursor-pointer group"
                style={{ left: m.pinX, top: m.pinY, transform: 'translate(-50%, -50%)' }}
                onClick={() => setSelectedYear(m.year)}
              >
                {/* Active pulsating beacon halo */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      layoutId="pulsingHalo"
                      className="absolute inset-0 -m-5 rounded-full pointer-events-none"
                      style={{ border: `1.5px solid ${m.pinColor}`, boxShadow: `0 0 25px ${m.glowColor}` }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>

                {/* Road Pin Marker */}
                <div 
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                    isSelected 
                      ? 'scale-125 bg-brand-slate-900 border-white' 
                      : 'bg-brand-slate-950 border-brand-slate-800 scale-100 hover:scale-110 hover:border-cyan-500/50'
                  }`}
                  style={{ color: m.pinColor, boxShadow: isSelected ? `0 0 20px ${m.glowColor}` : 'none' }}
                >
                  <MapPin className="w-5 h-5 shrink-0" />
                </div>

                {/* Tiny Floating Year Badge */}
                <span 
                  className={`absolute left-1/2 -top-8 -translate-x-1/2 px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-widest border transition-all duration-300 font-mono ${
                    isSelected 
                      ? 'bg-white text-black border-white' 
                      : 'bg-brand-slate-950 text-brand-slate-400 border-brand-slate-800'
                  }`}
                >
                  {m.year}
                </span>
              </div>
            );
          })}

          {/* INTERACTIVE DIGITAL STATISTICS TABLES Floating Beside pins */}
          {journeyData.map((m) => {
            const isSelected = m.year === selectedYear;
            return (
              <div
                key={m.year}
                className="absolute z-20 transition-all duration-500 pointer-events-none"
                style={{ 
                  left: m.cardX, 
                  top: m.cardY,
                  opacity: isSelected ? 1 : 0.05,
                  scale: isSelected ? 1 : 0.85,
                  filter: isSelected ? 'blur(0px)' : 'blur(2px)'
                }}
              >
                {/* Compact, high-tech grid metrics table */}
                <div className={`p-4 rounded-2xl bg-[#030712]/95 border backdrop-blur-md w-[280px] shadow-2xl transition-all duration-300 ${
                  isSelected ? 'border-cyan-500/30 ring-1 ring-cyan-500/20' : 'border-brand-slate-800/40'
                }`}>
                  {/* Card Title & Year */}
                  <div className="flex items-center justify-between pb-2 border-b border-brand-slate-800 mb-3">
                    <span className="text-xs font-mono font-black uppercase text-brand-slate-400">
                      MDFAB stats
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-black tracking-widest bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                      {m.year}
                    </span>
                  </div>

                  {/* High fidelity 3x1 Table layout inspired by the original image */}
                  <div className="grid grid-cols-3 border border-brand-slate-800 rounded-lg overflow-hidden mb-3.5 text-center bg-black/40">
                    <div className="border-r border-brand-slate-800">
                      <div className="bg-brand-slate-900/60 py-1.5 px-1 text-[8px] font-mono font-bold text-slate-300 uppercase tracking-tight leading-none border-b border-brand-slate-800">
                        Factory<br/>Area
                      </div>
                      <div className="py-2 text-[11px] font-extrabold text-white font-mono">
                        {m.areaVal >= 1000 ? `${(m.areaVal/1000).toFixed(0)}k sqft` : `${m.areaVal} sqft`}
                      </div>
                    </div>
                    <div className="border-r border-brand-slate-800">
                      <div className="bg-brand-slate-900/60 py-1.5 px-1 text-[8px] font-mono font-bold text-slate-300 uppercase tracking-tight leading-none border-b border-brand-slate-800">
                        No. of<br/>Emp
                      </div>
                      <div className="py-2 text-[11px] font-extrabold text-white font-mono">
                        {m.employees}
                      </div>
                    </div>
                    <div>
                      <div className="bg-brand-slate-900/60 py-1.5 px-1 text-[8px] font-mono font-bold text-slate-300 uppercase tracking-tight leading-none border-b border-brand-slate-800">
                        Turn<br/>over (L)
                      </div>
                      <div className="py-2 text-[11px] font-extrabold text-cyan-300 font-mono">
                        {m.turnover}
                      </div>
                    </div>
                  </div>

                  {/* Short highlight statement */}
                  <div className="flex items-start gap-2 bg-brand-slate-950 p-2.5 rounded-lg border border-brand-slate-900">
                    <div className="p-1 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-500/20 mt-0.5">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                    </div>
                    <p className="text-[10px] text-slate-100 leading-normal font-sans font-semibold">
                      {m.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ACTIVE DETAILS FOCUS BOX in top-right area */}
          <div className="absolute right-6 top-6 w-[340px] z-30 p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 shadow-2xl backdrop-blur-md">
            <div className="bg-[#030712]/95 border border-brand-slate-800/80 rounded-[14px] p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  <Milestone className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-display">
                  Milestone Brief
                </h3>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  Year {currentMilestone.year}
                </div>
                <h4 className="text-base font-extrabold text-white">
                  {currentMilestone.title}
                </h4>
              </div>

              <p className="text-xs text-slate-100 leading-relaxed font-semibold">
                {currentMilestone.description}
              </p>

              {/* AI Insight Box */}
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/15 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-black text-cyan-400 uppercase tracking-widest">
                  <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  AI Factory Growth Insight
                </div>
                <p className="text-[11px] text-white font-mono leading-relaxed font-semibold">
                  "{currentMilestone.aiInsight}"
                </p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* MOBILE OR TABLET TIMELINE LAYOUT (100% RESPONSIVE) */}
        <div className="xl:hidden space-y-8">
          
          {/* Active Highlight Focus Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="p-5 sm:p-6 rounded-2xl bg-[#030712]/90 border border-brand-slate-800/80 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-slate-400 block uppercase font-bold">Selected Year</span>
                  <span className="text-base font-black text-white font-mono tracking-tight">{selectedYear}</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/25 font-mono text-xs font-bold">
                {currentMilestone.area}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-white uppercase font-display tracking-tight">
                {currentMilestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans font-semibold">
                {currentMilestone.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 space-y-1">
              <div className="flex items-center gap-1.5 text-[9px] font-mono font-black text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Growth Analytics
              </div>
              <p className="text-[11px] sm:text-xs text-white font-mono leading-relaxed font-semibold italic">
                "{currentMilestone.aiInsight}"
              </p>
            </div>

            {/* Microstats comparison table */}
            <div className="grid grid-cols-3 border border-brand-slate-800 rounded-xl overflow-hidden bg-black/30 text-center">
              <div className="p-3 border-r border-brand-slate-800 flex flex-col justify-between">
                <span className="text-[9px] font-mono font-bold text-slate-300 uppercase">Factory Area</span>
                <span className="text-xs sm:text-sm font-black text-white font-mono mt-1 block">{currentMilestone.area}</span>
              </div>
              <div className="p-3 border-r border-brand-slate-800 flex flex-col justify-between">
                <span className="text-[9px] font-mono font-bold text-slate-300 uppercase">Direct Team</span>
                <span className="text-xs sm:text-sm font-black text-white font-mono mt-1 block">{currentMilestone.employees} Emp</span>
              </div>
              <div className="p-3 flex flex-col justify-between">
                <span className="text-[9px] font-mono font-bold text-slate-300 uppercase">Turnover (L)</span>
                <span className="text-xs sm:text-sm font-black text-cyan-300 font-mono mt-1 block">{currentMilestone.turnover}</span>
              </div>
            </div>
          </motion.div>

          {/* Chronological Progressive Road List - Styled as a Realistic Vertical Highway Map */}
          <div className="relative pl-12 space-y-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-[#0f1e2e] before:rounded-xl before:border-x before:border-brand-slate-800/80 after:absolute after:left-[15px] after:top-0 after:bottom-0 after:w-0 after:border-l after:border-dashed after:border-brand-slate-600/60">
            {journeyData.map((m) => {
              const isSelected = m.year === selectedYear;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  key={m.year}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedYear(m.year)}
                >
                  {/* Vertical road pin marker centered on the 32px vertical highway */}
                  <div 
                    className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: isSelected ? '#030712' : '#090d16',
                      borderColor: isSelected ? m.pinColor : '#1e293b', 
                      boxShadow: isSelected ? `0 0 12px ${m.glowColor}` : 'none' 
                    }}
                  >
                    <MapPin 
                      className="w-4 h-4 shrink-0 transition-all duration-300" 
                      style={{ color: isSelected ? m.pinColor : '#475569' }}
                    />
                  </div>

                  {/* Pulsing glow ring for the selected mobile road pin */}
                  {isSelected && (
                    <motion.div 
                      className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-10 h-10 rounded-full border border-dashed z-10"
                      style={{ borderColor: m.pinColor }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />
                  )}

                  {/* Year Box Row */}
                  <div className={`p-4 rounded-xl border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#030712]/90 border-cyan-500/35 shadow-lg' 
                      : 'bg-brand-slate-950 border-brand-slate-900 hover:border-brand-slate-800 hover:bg-brand-slate-900/30'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-black font-mono tracking-wider ${m.textColor}`}>
                          {m.year}
                        </span>
                        <h4 className="text-xs font-extrabold text-white font-sans uppercase tracking-tight">
                          {m.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0 border-t border-brand-slate-900/40 sm:border-t-0">
                        <span className="text-[10px] font-mono text-slate-300 font-bold">Turnover:</span>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                          {m.turnover}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
