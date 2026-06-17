import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Github, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex bg-slate-50 border-b border-slate-100 p-2">
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-3 text-sm font-semibold rounded-2xl transition-all ${
                  activeTab === 'register'
                    ? 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-900/5'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Daftar Baru
              </button>
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 text-sm font-semibold rounded-2xl transition-all ${
                  activeTab === 'login'
                    ? 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-900/5'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Masuk
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {activeTab === 'register' ? 'Mulai Perjalananmu' : 'Selamat Datang Kembali'}
                </h3>
                <p className="text-slate-500 text-sm">
                  {activeTab === 'register'
                    ? 'Daftar sekarang dan ikuti kompetisi bergengsi dari seluruh Indonesia.'
                    : 'Masuk ke akunmu untuk melihat jadwal dan hasil ujian.'}
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {activeTab === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Lengkap</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all font-medium placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                  {activeTab === 'login' && (
                    <div className="mt-2 text-right">
                      <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                        Lupa password?
                      </a>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-blue-200"
                >
                  {activeTab === 'register' ? 'Buat Akun Sekarang' : 'Masuk ke Dashboard'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
