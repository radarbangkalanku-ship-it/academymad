import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Kisah Sukses</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Dipercaya oleh Ribuan Pelajar & Guru</h3>
          <p className="text-slate-500 font-medium text-lg">
            Dengarkan langsung dari mereka yang telah merasakan pengalaman berkompetisi dan meraih prestasi bersama Madura Academy.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center relative min-h-[300px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative w-full"
                >
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-slate-200/50 -z-10" />
                  
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-slate-700 mb-8 z-10 relative">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-sm ring-4 ring-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-slate-900">{testimonials[currentIndex].name}</div>
                      <div className="text-slate-500 text-sm font-medium">{testimonials[currentIndex].role} &bull; {testimonials[currentIndex].school}</div>
                    </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 rounded-full transition-all border border-slate-200 shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-orange-500 w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 rounded-full transition-all border border-slate-200 shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
