import { motion } from 'motion/react';
import { partners } from '../data';

export default function Partners() {
  // Duplicate partners to create a seamless looping marquee
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-12 border-y border-slate-200 bg-white overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Dipercaya dan Didukung Oleh
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-nowrap items-center gap-12 sm:gap-20 w-fit shrink-0 pl-12"
        >
          {marqueeItems.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="text-lg md:text-xl font-bold text-slate-300 whitespace-nowrap opacity-60 hover:opacity-100 hover:text-blue-700 transition-all cursor-default"
            >
              {partner.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
