import { useState, useEffect } from 'react';
import { Menu, X, Library } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ 
  onOpenAuthModal, 
  isAuthenticated, 
  onLogout 
}: { 
  onOpenAuthModal?: () => void;
  isAuthenticated?: boolean;
  onLogout?: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-md">
              <Library className="w-5 h-5 text-orange-100" />
            </div>
            <span className="font-semibold text-2xl tracking-tight text-slate-900">Madura Academy</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Beranda</a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Fitur</a>
            <a href="#competitions" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Jadwal Kompetisi</a>
            <a href="#stats" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Statistik</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 mr-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                    JD
                  </div>
                  <span className="text-sm font-medium text-slate-700">John Doe</span>
                </div>
                <button onClick={onLogout} className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Logout</button>
              </>
            ) : (
              <>
                <button onClick={onOpenAuthModal} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">Masuk</button>
                <button onClick={onOpenAuthModal} className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-full transition-all shadow-md hover:shadow-lg">
                  Daftar Sekarang
                </button>
              </>
            )}
          </div>

          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-xl shadow-2xl py-4 flex flex-col md:hidden border-t border-slate-100/50"
          >
            <div className="flex flex-col px-4 gap-2">
              <a href="#home" className="px-4 py-3 rounded-2xl text-slate-600 hover:bg-slate-100/50 font-medium transition-colors">Beranda</a>
              <a href="#features" className="px-4 py-3 rounded-2xl text-slate-600 hover:bg-slate-100/50 font-medium transition-colors">Fitur</a>
              <a href="#competitions" className="px-4 py-3 rounded-2xl text-slate-600 hover:bg-slate-100/50 font-medium transition-colors">Jadwal Kompetisi</a>
              <a href="#stats" className="px-4 py-3 rounded-2xl text-slate-600 hover:bg-slate-100/50 font-medium transition-colors">Statistik</a>
              
              <div className="pt-4 mt-2 border-t border-slate-200/50 flex flex-col gap-3">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 px-4 py-2">
                      <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                        JD
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">John Doe</div>
                        <div className="text-xs text-slate-500">Siswa SMA</div>
                      </div>
                    </div>
                    <button onClick={() => { setIsMobileMenuOpen(false); onLogout?.(); }} className="w-full text-center py-3 font-medium text-red-600 bg-red-50/80 hover:bg-red-50 rounded-2xl transition-colors">Logout</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setIsMobileMenuOpen(false); onOpenAuthModal?.(); }} className="w-full text-center py-3 font-medium text-slate-600 bg-slate-100/50 hover:bg-slate-100 rounded-2xl transition-colors">Masuk</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); onOpenAuthModal?.(); }} className="w-full text-center py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-2xl transition-all shadow-md">Daftar Sekarang</button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
