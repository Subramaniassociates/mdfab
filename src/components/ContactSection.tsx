import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Send, ShieldAlert, Navigation2, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  preselectedProduct?: string;
  setPreselectedProduct?: (prod: string) => void;
}

export default function ContactSection({ preselectedProduct, setPreselectedProduct }: ContactSectionProps) {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackProduct, setCallbackProduct] = useState(preselectedProduct || 'racks');
  const [callbackRequested, setCallbackRequested] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setCallbackProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  const handleSubmitCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    setCallbackRequested(true);
    setTimeout(() => {
      setCallbackName('');
      setCallbackPhone('');
      setCallbackRequested(false);
    }, 4000);
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3551509653733!2d77.8382034!3d12.71505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae770043762509%3A0xb52065d679a7deba!2sM.D.FAB!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";
  const directionLink = "https://www.google.com/maps/place/M.D.FAB/@12.71505,77.8382034,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae770043762509:0xb52065d679a7deba!8m2!3d12.7150448!4d77.8407783!16s%2Fg%2F11vrk6zp6j?entry=ttu";

  return (
    <section id="contact" className="py-20 bg-brand-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Connect with Our Engineering Hub
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-brand-slate-400 text-sm leading-relaxed">
            Have custom dimensions or specific grade requirements? Schedule a direct technical feasibility call with our head fabricators, or navigate directly to our Hosur manufacturing unit.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location, Iframe map, directions */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-brand-slate-950/60 backdrop-blur-md rounded-2xl border border-brand-slate-800 p-6 md:p-8 shadow-2xl space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display">Manufacturing Facility</h3>
              
              <div className="flex items-start gap-3 text-sm text-brand-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">MDFAB Plant</p>
                  <p className="leading-relaxed text-xs">
                    Plot no.31, Indrapuri layout, opposite to LUK India, Rayakotta road, Chennathur post, Hosur, Tamil Nadu - 635109, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 text-xs bg-brand-slate-900/50 p-3.5 rounded-xl border border-brand-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-brand-slate-400 block font-semibold uppercase text-[9px]">Plant Hours</span>
                    <span className="text-brand-slate-200 font-medium">Monday - Saturday (09:00 - 18:30)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs bg-brand-slate-900/50 p-3.5 rounded-xl border border-brand-slate-800">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-brand-slate-400 block font-semibold uppercase text-[9px]">Sales Email</span>
                    <span className="text-brand-slate-200 font-medium">sales@mdfab.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Iframe Map */}
            <div className="relative rounded-xl overflow-hidden border border-brand-slate-800 h-64 shadow-inner">
              <iframe
                title="MDFAB Hosur Location Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) grayscale(40%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-cyan-500/10 rounded-xl" />
            </div>

            {/* Google Maps Directions Deep Link */}
            <a
              href={directionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-brand-slate-900 hover:bg-brand-slate-800/80 text-brand-slate-200 hover:text-white text-xs font-bold rounded-xl border border-brand-slate-800 transition flex items-center justify-center gap-2 cursor-pointer w-full"
            >
              <Navigation2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              Open GPS Directions to MDFAB Plant
            </a>

          </div>

          {/* Right Column: Direct Hotkeys & Callbacks */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-slate-950/60 backdrop-blur-md rounded-2xl border border-brand-slate-800 p-6 md:p-8 shadow-2xl space-y-6">
            
            {/* Direct Dial contacts */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display">Direct Plant Hotlines</h3>
              <p className="text-xs text-brand-slate-400">
                Speak directly with our technical partners and fabrication supervisors regarding wholesale inquiries or custom dimensional sheets.
              </p>

              <div className="space-y-3">
                
                {/* Contact C. Manjunath */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-slate-900 to-brand-slate-900/30 border border-brand-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Mr C. Manjunath</h4>
                    <p className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">Managing Partner / Operations</p>
                  </div>
                  <a
                    href="tel:+919443358422"
                    className="p-3 bg-cyan-950/40 hover:bg-cyan-900/30 text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-500/20 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>

                {/* Contact G. Lakshmanan */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-slate-900 to-brand-slate-900/30 border border-brand-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">G. Lakshmanan</h4>
                    <p className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">Technical Partner / Dispatch</p>
                  </div>
                  <a
                    href="tel:+919443314065"
                    className="p-3 bg-blue-950/40 hover:bg-blue-900/30 text-blue-400 hover:text-blue-300 rounded-lg border border-blue-500/20 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>

              </div>
            </div>

            {/* Quick Callback Request */}
            <div className="bg-brand-slate-900 p-5 rounded-xl border border-brand-slate-800 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Request Instant Engineering Call</h4>
                <p className="text-[11px] text-brand-slate-400 mt-0.5">We will call you back within 15 minutes during working hours.</p>
              </div>

              {callbackRequested ? (
                <div className="py-4 text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-xs font-bold text-white">Callback Scheduled!</p>
                  <p className="text-[10px] text-brand-slate-400">Our team will call your provided number shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitCallback} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="text-xs bg-brand-slate-950 border border-brand-slate-800 rounded-lg p-2.5 focus:outline-none focus:border-cyan-500"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Contact Number"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="text-xs bg-brand-slate-950 border border-brand-slate-800 rounded-lg p-2.5 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select
                      value={callbackProduct}
                      onChange={(e) => {
                        setCallbackProduct(e.target.value);
                        setPreselectedProduct?.(e.target.value);
                      }}
                      className="text-xs bg-brand-slate-950 border border-brand-slate-800 rounded-lg p-2.5 focus:outline-none focus:border-cyan-500 grow"
                    >
                      <option value="racks">Multipurpose Racks</option>
                      <option value="trolleys">SS Trolleys</option>
                      <option value="cupboards">SS Cupboards</option>
                      <option value="pallets">Metal Pallets</option>
                    </select>

                    <button
                      type="submit"
                      className="px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1 cursor-pointer shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Request
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Plant Quality Notice */}
            <div className="flex items-start gap-2.5 text-[10px] text-brand-slate-400 bg-brand-slate-900/30 p-3 rounded-lg border border-brand-slate-800/40">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-tight">
                MDFAB is fully registered and licensed to manufacture for pharmaceutical labs and chemical layouts. All standard deliveries comply with CGMP standards.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
