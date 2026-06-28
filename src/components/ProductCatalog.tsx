import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductItem, ProductCategory } from '../types';
import { Layers, Truck, Package, DoorClosed, Check, Cog, ArrowRight, ShieldCheck, Factory, HeartPulse } from 'lucide-react';

// Import images for Vite
import ssRacksImg from '/src/assets/images/ss_racks_industrial_1782376946271.jpg';
import ssTrolleyImg from '/src/assets/images/ss_trolley_premium_1782376962250.jpg';
import ssCupboardImg from '/src/assets/images/ss_cupboard_cleanroom_1782376978140.jpg';
import ssPalletImg from '/src/assets/images/ss_metal_pallet_1782376992792.jpg';

interface ProductCatalogProps {
  onAddToQuote: (category: ProductCategory) => void;
}

export default function ProductCatalog({ onAddToQuote }: ProductCatalogProps) {
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const handleAddClick = (category: ProductCategory) => {
    onAddToQuote(category);
    setAddedItems(prev => ({ ...prev, [category]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [category]: false }));
    }, 2000);
  };

  const products: ProductItem[] = [
    {
      id: 'racks',
      category: 'racks',
      name: 'Multipurpose Industrial SS Racks',
      description: 'Engineered for extreme durability and optimal storage density, these high-grade stainless steel racks are corrosion-resistant and fully customizable. Perfect for cold storage, cleanrooms, and food handling units.',
      image: ssRacksImg,
      specs: [
        { label: 'Available Grades', value: 'SS 304, SS 316L, SS 202' },
        { label: 'Loading Capacity', value: 'Up to 250 kg per shelf (reinforced)' },
        { label: 'Finish', value: 'Electro-polished / Brushed satin metal' },
        { label: 'Shelf Options', value: 'Slotted, Perforated, or Solid wire mesh' },
      ],
      features: [
        'Sanitizable hollow channels preventing bacteria accumulation',
        'TIG welded connections for continuous structural integrity',
        'Fully adjustable shelf heights with locking collars',
        'Optional anti-vibration leveling feet or PU casters'
      ]
    },
    {
      id: 'trolleys',
      category: 'trolleys',
      name: 'Heavy-Duty SS Utility Trolleys',
      description: 'The pinnacle of ergonomic material handling. Our industrial-grade SS trolleys provide seamless, silent transit for components, medical kits, or chemical containers in demanding environments.',
      image: ssTrolleyImg,
      specs: [
        { label: 'Available Grades', value: 'SS 304, SS 316, SS 202' },
        { label: 'Wheel Caster Type', value: 'Non-marking polyurethane with dual pedal brakes' },
        { label: 'Handle Type', value: 'Ergonomic integrated push bar (single/double sided)' },
        { label: 'Shelf Guard', value: 'Integrated 3-side metal retaining lip (anti-slip)' },
      ],
      features: [
        'Shock-absorbing wheels with stainless steel swivel ball bearings',
        'Hygienic easy-wipe design with no sharp exposed hardware',
        'Available in multi-tier options (2, 3, or 4 levels)',
        'Heavy load distribution structure'
      ]
    },
    {
      id: 'cupboards',
      category: 'cupboards',
      name: 'Pharma & Cleanroom SS Cupboards',
      description: 'Precision-crafted sealed enclosures for pharmaceutical vials, cleanroom apparel, surgical apparatus, or sensitive electronics. Dust-proof, chemical-resistant, and high-security lockers.',
      image: ssCupboardImg,
      specs: [
        { label: 'Available Grades', value: 'SS 316, SS 304' },
        { label: 'Door Styles', value: 'Tempered safety glass window / Double-skin solid SS sliding' },
        { label: 'Lock Mechanism', value: 'Industrial cam-lock / Electronic keypad optional' },
        { label: 'Shelving Type', value: 'Perforated for laminar airflow compatibility' },
      ],
      features: [
        'Aseptic sealing gaskets with heavy duty industrial magnetic seals',
        'Sloped top self-shedding design for sterile cleaning regulations',
        'Adjustable inner panels with secure heavy-weight peg channels',
        'High resistance to standard sterilizing chemicals and autoclaving'
      ]
    },
    {
      id: 'pallets',
      category: 'pallets',
      name: 'Corrosion-Resistant SS Metal Pallets',
      description: 'Replaces wood and plastic entirely. Our hollow channel stainless steel pallets deliver an cleanable, fire-proof, and virtually indestructible solution for heavy-duty storage and forklift transport.',
      image: ssPalletImg,
      specs: [
        { label: 'Available Grades', value: 'SS 304, SS 316' },
        { label: 'Static Load Capacity', value: 'Up to 4,500 kg' },
        { label: 'Dynamic Load Capacity', value: 'Up to 2,200 kg' },
        { label: 'Fork Entry Pattern', value: '2-way or 4-way forklift / hand-jack entry' },
      ],
      features: [
        'Zero moisture retention – fully compliant with FDA B2B food safety',
        'Reinforced welded corners for high impact forklifting drops',
        '100% recyclable, sterile, fireproof material structure',
        'Available in custom slip-proof checkered sheet finishes'
      ]
    }
  ];

  const getIcon = (category: ProductCategory) => {
    switch (category) {
      case 'racks': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'trolleys': return <Truck className="w-5 h-5 text-blue-400" />;
      case 'cupboards': return <DoorClosed className="w-5 h-5 text-indigo-400" />;
      case 'pallets': return <Package className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-brand-slate-950 text-white scroll-mt-20 relative overflow-hidden">
      
      {/* Blueprint grid lines on background matching materials showcase */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:30px_30px] opacity-70 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white font-display mb-4 uppercase">
            Industrial Equipment Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-brand-slate-400 text-sm md:text-base">
            Every product is custom-sized and meticulously welded at our fabrication facility in Hosur, India. We serve pharmaceutical labs, food processing plants, aerospace factories, and automated warehouses.
          </p>
        </div>

        {/* Industrial Certifications Badges with highly matching dark metal theme */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#050d14] border border-cyan-500/10">
            <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">ISO Compliant Welding</h4>
              <p className="text-xs text-brand-slate-400">High purity TIG welds</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#050d14] border border-blue-500/10">
            <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-blue-400">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Aseptic / Pharma Grade</h4>
              <p className="text-xs text-brand-slate-400">Easy clean bacteria-free corners</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#050d14] border border-indigo-500/10">
            <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-400">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Heavy-Duty Tested</h4>
              <p className="text-xs text-brand-slate-400">Finite Element Stress Checked</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050d14] p-6 md:p-8 rounded-3xl border border-cyan-500/10 hover:border-cyan-500/25 transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.6)]"
            >
              
              {/* Product Visual */}
              <div className={`col-span-1 lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-2xl border border-brand-slate-800/80 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-950/80 via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] md:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-white/20 flex items-center gap-2">
                    {getIcon(product.category)}
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">{product.category}</span>
                  </div>
                </div>
              </div>

              {/* Product Technical Specifications & Overview */}
              <div className={`col-span-1 lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white font-display uppercase">
                    {product.name}
                  </h3>
                  <p className="text-brand-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Specs list - changed to rich high contrast look */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#02060a] p-4 rounded-xl border border-cyan-500/10 font-mono text-xs">
                  {product.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="space-y-0.5">
                      <span className="text-brand-slate-500 block font-bold uppercase tracking-wider text-[9px]">{spec.label}</span>
                      <span className="text-cyan-100 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">Structural Features:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, featIdx) => (
                      <div key={featIdx} className="flex items-start gap-2.5 text-xs text-brand-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Configure Trigger Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleAddClick(product.category)}
                    className={`px-6 py-3.5 text-xs font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer group ${
                      addedItems[product.category]
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-cyan-500/20'
                    }`}
                  >
                    <span>{addedItems[product.category] ? 'Added to Inquiry!' : 'Add to Inquiry Cart'}</span>
                    {addedItems[product.category] ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                  
                  <div className="text-xs text-brand-slate-400 flex items-center gap-1.5 font-mono">
                    <Cog className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                    Mill Spec Certified (SS304 / SS316L)
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}