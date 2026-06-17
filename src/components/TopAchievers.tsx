import { motion } from 'motion/react';
import { Trophy, Medal, Star } from 'lucide-react';
import { achievers } from '../data';

export default function TopAchievers() {
  return (
    <section id="achievers" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wide uppercase mb-4">
            <Trophy className="w-4 h-4" />
            <span>Hall of Fame</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Prestasi Gemilang Pelajar Indonesia</h3>
          <p className="text-lg text-slate-600">
            Apresiasi tertinggi untuk para juara yang telah membuktikan kemampuan terbaiknya di berbagai kompetisi nasional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievers.map((achiever, index) => (
            <motion.div
              key={achiever.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-xl hover:-translate-y-1 transition-all ring-1 ring-slate-900/5 group text-center flex flex-col items-center relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="w-20 h-20 bg-blue-50 rounded-full border-4 border-white shadow-md flex items-center justify-center text-blue-300 font-bold text-2xl mb-4 relative z-10">
                 {/* generate some avatars based on initials */}
                 {achiever.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">{achiever.name}</h4>
              <p className="text-sm font-medium text-slate-500 mb-4">{achiever.school}</p>
              
              <div className="mt-auto flex flex-col items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold ring-1 ring-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  Medali {achiever.medal}
                </div>
                <div className="text-xs font-medium text-slate-400">{achiever.competition}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
