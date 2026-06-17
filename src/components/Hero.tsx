import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, Star, FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-08-15T00:00:00+07:00');

export default function Hero({ onOpenAuthModal }: { onOpenAuthModal?: () => void }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +TARGET_DATE - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background styling for a modern, sleek feel */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,1))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white max-w-fit shadow-sm text-blue-700 text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>Platform Kompetisi Akademik #1</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
            >
              Ukur Potensi Dirimu, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Raih Prestasi Nasional.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Madura Academy adalah ekosistem kompetisi terintegrasi yang memberdayakan jutaan pelajar di seluruh Indonesia dengan ujian standar kualitas tinggi dan sertifikasi resmi.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button onClick={onOpenAuthModal} className="w-full sm:w-auto px-8 py-4 bg-black/90 hover:bg-black text-white font-medium rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                Mulai Berkompetisi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#competitions" className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md hover:bg-white/80 text-slate-800 font-medium rounded-2xl shadow-sm border border-white transition-all flex items-center justify-center gap-2">
                Lihat Jadwal
              </a>
              <a href="/panduan_peserta.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md hover:bg-white/80 text-slate-800 font-medium rounded-2xl shadow-sm border border-white transition-all flex items-center justify-center gap-2 group">
                <FileDown className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
                Panduan Peserta
              </a>
            </motion.div>

            {/* Countdown Timer Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start bg-white/60 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white max-w-fit mx-auto lg:mx-0"
            >
              <div className="text-sm font-bold text-slate-700 uppercase tracking-widest text-center sm:text-left">
                PENDAFTARAN OSN<br/><span className="text-blue-600">DITUTUP DALAM:</span>
              </div>
              <div className="flex gap-3">
                {[
                  { label: 'Hari', value: timeLeft.days },
                  { label: 'Jam', value: timeLeft.hours },
                  { label: 'Menit', value: timeLeft.minutes },
                  { label: 'Detik', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm flex items-center justify-center text-xl font-bold text-slate-800 font-mono">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm border border-white">
                <Trophy className="w-4 h-4 text-slate-700" />
                <span>Ratusan Medali</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm border border-white">
                <Users className="w-4 h-4 text-slate-700" />
                <span>150k+ Pengguna</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-slate-50/50 backdrop-blur-3xl border border-white">
               {/* Decorative mock UI for "Apple Glass" feel */}
               <div className="absolute inset-0 bg-white/30 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-md p-3 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-white/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <div className="ml-2 h-2 w-24 bg-slate-200/50 rounded-full"></div>
                  </div>
                  <div className="flex-1 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 p-6 flex flex-col gap-4 shadow-sm">
                     <div className="h-5 w-1/3 bg-slate-200/80 rounded-lg"></div>
                     <div className="flex-1 rounded-2xl bg-white/50 border border-white/60 p-5 shadow-sm">
                         <div className="flex items-center justify-between mb-5 border-b border-slate-100/50 pb-5">
                           <div className="h-4 w-1/4 bg-slate-300/80 rounded-md"></div>
                           <div className="h-4 w-1/6 bg-blue-100 rounded-md"></div>
                        </div>
                        <div className="space-y-4">
                           <div className="h-4 w-full bg-slate-200/70 rounded-md"></div>
                           <div className="h-4 w-5/6 bg-slate-200/70 rounded-md"></div>
                           <div className="h-4 w-4/6 bg-slate-200/70 rounded-md"></div>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="h-16 flex-1 rounded-2xl bg-blue-50/50 border border-white shadow-sm relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                        </div>
                        <div className="h-16 flex-1 rounded-2xl bg-white/50 border border-white shadow-sm"></div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-0.5">Sistem CBT</p>
                <p className="text-sm font-bold text-slate-800">Anti Kecurangan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
