import { Monitor, Award, Medal, Brain } from 'lucide-react';
import { features } from '../data';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  monitor: Monitor,
  award: Award,
  medal: Medal,
  brain: Brain
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Subtle modern background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Keunggulan Sistem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mengapa Memilih Madura Academy?</h3>
          <p className="text-lg text-slate-500 font-medium">
            Platform kami dirancang dengan teknologi terkini untuk memastikan pengalaman berkompetisi yang adil, aman, dan mendidik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = icons[feature.iconName];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  {IconComponent && <IconComponent className="w-6 h-6 text-blue-700" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
