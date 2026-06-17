import { Library, MapPin, Mail, Phone, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50/50 backdrop-blur-3xl text-slate-600 py-12 md:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-md">
                <Library className="w-4 h-4 cursor-pointer text-orange-100" />
              </div>
              <span className="font-semibold text-xl tracking-tight">Madura Academy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Penyelenggara olimpiade akademik nasional berkualitas tinggi dengan sistem Computer Based Test tercanggih di Indonesia.
            </p>
          </div>
          
          <div className="order-2 lg:order-none sm:col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 font-bold mb-5">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm max-w-xs">
              <li className="flex gap-3 items-start p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="font-medium">Dinas Pendidikan Kabupaten Bangkalan</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-medium">hello@maduraacademy.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-medium">+62 811 2345 6789</span>
              </li>
            </ul>
          </div>

          <div className="order-3 lg:order-none">
            <h4 className="text-slate-900 font-bold mb-5">Menu Utama</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#home" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Beranda</a></li>
              <li><a href="#features" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Keunggulan CBT</a></li>
              <li><a href="#competitions" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Jadwal Kompetisi</a></li>
              <li><a href="#stats" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Galeri Juara</a></li>
            </ul>
          </div>

          <div className="order-4 lg:order-none">
            <h4 className="text-slate-900 font-bold mb-5">Bantuan & Legal</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#faq" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">FAQ & Panduan</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Cek Sertifikat</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors block py-1 text-slate-500">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Madura Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 transition-all shadow-sm border border-slate-100" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 transition-all shadow-sm border border-slate-100" aria-label="Twitter">
               <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 transition-all shadow-sm border border-slate-100" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
