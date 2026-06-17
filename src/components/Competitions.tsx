import { Calendar, Users, Award, ChevronRight, Search, Filter } from 'lucide-react';
import { competitions } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';

export default function Competitions({ onOpenAuthModal }: { onOpenAuthModal?: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('Semua');

  const levels = ['Semua', 'SD/MI', 'SMP/MTs', 'SMA/MA'];

  const filteredCompetitions = useMemo(() => {
    return competitions.filter(comp => {
      const matchQuery = comp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         comp.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLevel = selectedLevel === 'Semua' || comp.level === selectedLevel;
      return matchQuery && matchLevel;
    });
  }, [searchQuery, selectedLevel]);

  return (
    <section id="competitions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Jadwal Terdekat</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Siapkan Dirimu Untuk Berprestasi</h3>
            <p className="text-lg text-slate-600">
              Jangan lewatkan kesempatan untuk mengukur kemampuanmu. Daftar sekarang di daftar Olimpiade dan Kompetisi yang sedang buka pendaftaran.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group px-4 py-2 ring-1 ring-blue-200 rounded-full hover:bg-blue-50">
            Lihat Semua Jadwal
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-50 p-4 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 border border-slate-200 items-center"
        >
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Cari kompetisi atau mata pelajaran..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex items-center gap-2 px-3 py-2 text-slate-500 text-sm font-semibold shrink-0">
              <Filter className="w-4 h-4" />
              Tingkat:
            </div>
            {levels.map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedLevel === level
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredCompetitions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCompetitions.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl ring-1 ring-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 hover:ring-blue-200 transition-all flex flex-col"
                >
                  <div className="h-48 bg-slate-100 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-blue-500/10 to-orange-500/10">
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full ring-1 ring-emerald-200/50">
                        {comp.status}
                      </span>
                      {comp.level && (
                        <span className="px-3 py-1 bg-white/80 backdrop-blur text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full ring-1 ring-slate-200/50 shadow-sm">
                          {comp.level}
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                       <Award className="w-32 h-32" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-sm font-semibold text-orange-500 mb-2">{comp.category}</div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">{comp.title}</h4>
                    
                    <div className="space-y-3 mb-8 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {comp.date}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Award className="w-4 h-4 text-slate-400" />
                        {comp.prize}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Users className="w-4 h-4 text-slate-400" />
                        {comp.participants.toLocaleString('id-ID')} Peserta Terdaftar
                      </div>
                    </div>

                    <button onClick={onOpenAuthModal} className="w-full py-3 bg-slate-900 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                      Daftar Kompetisi
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200"
          >
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Tidak menemukan kompetisi</h4>
            <p className="text-slate-500">Coba gunakan kata kunci atau filter tingkat yang lain.</p>
          </motion.div>
        )}
        
        <button className="mt-10 mx-auto md:hidden w-full flex items-center justify-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group px-4 py-3 ring-1 ring-blue-200 rounded-xl hover:bg-blue-50">
          Lihat Semua Jadwal
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
