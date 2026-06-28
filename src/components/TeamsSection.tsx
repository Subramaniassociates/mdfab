import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake, Phone, Mail, FileText, Sparkles } from 'lucide-react';

// Import image for Vite
import founderImg from '/src/assets/images/corporate_executive_portrait_1782638875184.jpg';

export default function TeamsSection() {
  const founder = {
    name: "Mr C. Manjunath",
    role: "Founder & Managing Partner",
    bio: "Under his vision and leadership, MDFAB was established as a premier high-strength sheet metal fabrication and structural engineering facility. Over 25+ years of hands-on expertise in heavy sheet metal, precision automotive products, custom cleanroom cabinetry, and production line assembly jigs.",
    phone: "+91 9443358422",
    certifications: [
      "25+ Years Industrial Leadership",
      "Process Automation Specialist",
      "ISO Quality Audit Certified",
      "Tier-1 Automotive OEM Partner"
    ],
    image: founderImg
  };

  return (
    <section id="team" className="py-24 bg-transparent text-white relative overflow-hidden scroll-mt-20">
      {/* Dynamic ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            FOUNDING VISION
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white font-display uppercase"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Founder</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-5 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-brand-slate-400 text-xs md:text-sm leading-relaxed font-sans font-semibold"
          >
            MDFAB was founded on the principles of engineering accuracy, structural durability, and absolute client commitment.
          </motion.p>
        </div>

        {/* Centered Single Founder Card Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center w-full">
          
          {/* Left: Beautifully polished Founder Portrait with Glowing Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-5/12 max-w-[320px] aspect-[3/4] relative rounded-2xl overflow-hidden border border-brand-slate-800 shadow-2xl group shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#02060d]/80 via-transparent to-transparent z-10" />
            <img 
              src={founder.image} 
              alt={founder.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Tag Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-black/80 backdrop-blur-md border border-brand-slate-800 p-2.5 rounded-xl font-mono text-[9px] font-bold">
              <span className="text-cyan-400 tracking-wider">MR. C. MANJUNATH</span>
              <span className="text-white/60">FOUNDER</span>
            </div>
          </motion.div>

          {/* Right: Detailed Bio, credentials and contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-7/12 p-6 md:p-8 rounded-2xl border border-brand-slate-900 bg-brand-slate-950/35 backdrop-blur-md hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Founder Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-brand-slate-900/60">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white font-display uppercase tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400 tracking-wider uppercase mt-1">
                    {founder.role}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] font-extrabold uppercase shrink-0 self-start sm:self-center">
                  <Award className="w-3.5 h-3.5 animate-bounce" />
                  MDFAB Leadership
                </div>
              </div>

              {/* Bio text */}
              <p className="text-brand-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-sans font-semibold">
                {founder.bio}
              </p>

              {/* Competencies */}
              <div className="space-y-2 mb-8">
                <span className="text-[9px] font-mono font-bold text-brand-slate-500 uppercase tracking-widest block">
                  Founding Competencies & Domain Expertise
                </span>
                <div className="flex flex-wrap gap-2">
                  {founder.certifications.map((cert) => (
                    <span key={cert} className="text-[10px] px-2.5 py-1 rounded-md bg-brand-slate-900 text-brand-slate-300 border border-brand-slate-800 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Line */}
            <div className="pt-5 border-t border-brand-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[10px] text-brand-slate-500 font-mono tracking-widest uppercase">
                DIRECT SALES & ESCALATION LINE
              </span>
              <a
                href={`tel:${founder.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-5 bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-400 hover:text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 animate-pulse" />
                Call Founder Direct
              </a>
            </div>

          </motion.div>
        </div>

        {/* Industrial Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-5 rounded-2xl border border-brand-slate-900 bg-brand-slate-950/20 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-brand-slate-400"
        >
          <div className="p-2.5 rounded-full bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <p className="max-w-2xl text-center sm:text-left leading-relaxed font-sans font-semibold">
            Over the years, MDFAB has established a rock-solid reputation under the guidance of Mr. C. Manjunath, delivering precision products to top-tier automotive OEMs, chemical, and pharmaceutical complexes across India.
          </p>
        </motion.div>

      </div>
    </section>
  );
}