import { stats } from '../data';

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-blue-500/30">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center space-y-2 ${index % 2 === 0 ? 'border-none' : ''} lg:border-l lg:first:border-none`}>
              <div className="text-4xl md:text-5xl font-extrabold text-white">
                {stat.value}<span className="text-orange-400">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-medium text-blue-100 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
