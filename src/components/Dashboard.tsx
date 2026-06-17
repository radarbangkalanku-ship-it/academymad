import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, FileText, CheckCircle2, ChevronRight, Clock, AlertCircle, ListChecks } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { sampleQuestions } from '../questions';

const progressData = [
  { month: 'Jan', matematika: 65, fisika: 60, biologi: 75 },
  { month: 'Feb', matematika: 70, fisika: 65, biologi: 78 },
  { month: 'Mar', matematika: 80, fisika: 75, biologi: 82 },
  { month: 'Apr', matematika: 85, fisika: 78, biologi: 85 },
  { month: 'Mei', matematika: 90, fisika: 85, biologi: 88 },
  { month: 'Jun', matematika: 95, fisika: 90, biologi: 92 },
];

const recentAttempts = [
  { id: 1, date: '16 Jun 2026', subject: 'Simulasi Tryout 100 Soal', score: 85, total: 100 },
  { id: 2, date: '14 Jun 2026', subject: 'Simulasi Matematika Dasar', score: 78, total: 100 },
  { id: 3, date: '10 Jun 2026', subject: 'Latihan Fisika Mekanika', score: 92, total: 100 },
  { id: 4, date: '05 Jun 2026', subject: 'Tryout Biologi Sel', score: 65, total: 100 },
  { id: 5, date: '01 Jun 2026', subject: 'Simulasi Kimia Organik', score: 88, total: 100 },
];

function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-24">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100/60 pb-3 mb-4 flex items-center gap-2">
        <Clock className="w-4 h-4" /> Pomodoro Timer
      </h3>
      <div className="text-center mb-6">
        <div className="text-5xl font-mono font-bold text-slate-900 mb-2">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="text-sm font-medium text-slate-500">25 Menit Sesi Fokus</div>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={toggleTimer}
          className={`flex-1 py-2.5 font-semibold rounded-xl text-sm transition-colors ${isRunning ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-200'}`}
        >
          {isRunning ? 'Pause' : 'Mulai'}
        </button>
        <button 
          onClick={resetTimer}
          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tryout'>('overview');
  
  // Quiz State
  const [quizState, setQuizState] = useState<'intro' | 'playing' | 'completed'>('intro');
  const [quizTimeLeft, setQuizTimeLeft] = useState(120 * 60); // 2 hours
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (quizState === 'playing' && quizTimeLeft > 0) {
      interval = setInterval(() => {
        setQuizTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (quizState === 'playing' && quizTimeLeft === 0) {
      setQuizState('completed');
    }
    return () => clearInterval(interval);
  }, [quizState, quizTimeLeft]);

  const handleAnswerSubmit = () => {
    setShowResult(true);
    if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizState('completed');
    }
  };

  const startQuiz = () => {
    setQuizState('playing');
    setQuizTimeLeft(120 * 60);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const restartQuiz = () => {
    setQuizState('intro');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="relative pt-24 pb-20 min-h-screen overflow-hidden">
       {/* Soft Apple Glass background layer */}
       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(120,119,198,0.08),rgba(255,255,255,1))] bg-[#f5f5f7]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-700 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-blue-200 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Trophy className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Datang, John! 👋</h1>
            <p className="text-blue-100 text-lg max-w-xl">Siap untuk meraih prestasimu hari ini? Ikuti kompetisi atau coba soal latihan untuk mengasah kemampuanmu.</p>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-slate-200 mb-8">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-2 font-semibold text-sm transition-colors relative ${activeTab === 'overview' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Overview Status
            {activeTab === 'overview' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('tryout')}
            className={`pb-4 px-2 font-semibold text-sm transition-colors relative ${activeTab === 'tryout' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Coba Soal Latihan
            {activeTab === 'tryout' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700" />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {/* Left Column - Active Competitions */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Kompetisi Aktif</h2>
                    <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-xs font-bold">1 Terdaftar</span>
                  </div>
                  
                  <div className="border border-slate-100 rounded-xl p-5 hover:border-blue-200 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-700 mb-1">SMA/MA</div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">Olimpiade Sains Nasional 2026</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 font-medium">
                          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 15 Aug 2026</div>
                          <div className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> Menunggu Ujian</div>
                        </div>
                      </div>
                    </div>
                    <button className="px-5 py-2.5 bg-slate-100 text-slate-400 font-semibold rounded-xl cursor-not-allowed text-sm text-center w-full sm:w-auto">
                      Ujian Belum Dimulai
                    </button>
                  </div>
                </div>

                {/* Recent Attempts */}
                <div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <ListChecks className="w-5 h-5 text-blue-500" /> Riwayat Latihan Terakhir
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {recentAttempts.map((attempt) => (
                      <div key={attempt.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 bg-slate-50 hover:bg-white transition-colors">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <span className="text-sm font-bold text-slate-900">{attempt.subject}</span>
                            <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">{attempt.date}</span>
                          </div>
                          <div className="text-sm text-slate-500 font-medium">Skor: {attempt.score} dari {attempt.total}</div>
                        </div>
                        <button className="text-sm text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 w-full sm:w-auto mt-2 sm:mt-0 justify-end transition-colors">
                          Review Jawaban <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <History className="w-5 h-5 text-slate-400" /> Perkembangan Nilai Latihan
                  </h2>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={progressData}
                        margin={{
                          top: 5,
                          right: 10,
                          left: -20,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#64748b', fontSize: 12 }}
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#64748b', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                        <Line type="monotone" name="Matematika" dataKey="matematika" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" name="Fisika" dataKey="fisika" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" name="Biologi" dataKey="biologi" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Right Column - Status Panel */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 mb-4">Profil Peserta</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Nama Lengkap</div>
                      <div className="text-sm font-bold text-slate-900">John Doe</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Asal Sekolah</div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        SMAN 1 Nusantara 
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">NISN</div>
                      <div className="text-sm font-bold text-slate-900">0012345678</div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-colors">
                    Edit Profil
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tryout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto"
            >
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-3xl ring-1 ring-slate-200 shadow-lg">
                {quizState === 'intro' ? (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                      <BookOpen className="w-12 h-12 text-blue-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulasi Tryout 100 Soal</h2>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Waktu yang diberikan adalah 2 jam (120 Menit). Siapkan diri Anda dan pastikan koneksi stabil sebelum memulai simulasi.
                    </p>
                    <button 
                      onClick={startQuiz}
                      className="px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 text-lg"
                    >
                      Mulai Ujian Sekarang
                    </button>
                  </div>
                ) : quizState === 'playing' ? (
                  <>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
                      <div>
                        <div className="text-blue-700 font-bold text-sm mb-1">{sampleQuestions[currentQuestion].subject}</div>
                        <h2 className="text-2xl font-bold text-slate-900">Simulasi Ujian CBT</h2>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 font-bold rounded-xl ring-1 ring-rose-200">
                          <Clock className="w-5 h-5" />
                          {Math.floor(quizTimeLeft / 60).toString().padStart(2, '0')}:{(quizTimeLeft % 60).toString().padStart(2, '0')}
                        </div>
                        <div className="flex items-center justify-center px-4 py-2 bg-slate-50 text-slate-600 font-bold rounded-xl ring-1 ring-slate-200">
                          {currentQuestion + 1}/{sampleQuestions.length}
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-lg text-slate-800 leading-relaxed font-medium">
                        {sampleQuestions[currentQuestion].question}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {sampleQuestions[currentQuestion].options.map((option, idx) => {
                        const isSelected = selectedAnswer === idx;
                        const isCorrect = idx === sampleQuestions[currentQuestion].correct;
                        
                        let bgClass = "bg-slate-50 hover:bg-slate-100 border-slate-200";
                        if (isSelected) bgClass = "bg-blue-50 border-blue-500 ring-1 ring-blue-500";
                        if (showResult) {
                          if (isCorrect) bgClass = "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500";
                          else if (isSelected && !isCorrect) bgClass = "bg-red-50 border-red-500 ring-1 ring-red-500";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showResult}
                            onClick={() => setSelectedAnswer(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${bgClass}`}
                          >
                            <span className={`font-medium ${showResult && isCorrect ? 'text-emerald-700' : showResult && isSelected && !isCorrect ? 'text-red-700' : 'text-slate-700'}`}>
                              {option}
                            </span>
                            {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                            {showResult && isSelected && !isCorrect && <AlertCircle className="w-5 h-5 text-red-500" />}
                          </button>
                        )
                      })}
                    </div>

                    {!showResult ? (
                      <button 
                        disabled={selectedAnswer === null}
                        onClick={handleAnswerSubmit}
                        className="w-full py-3.5 bg-blue-700 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-blue-800 text-white font-medium text-sm rounded-xl transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Kunci Jawaban
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className={`p-4 rounded-xl ring-1 ${selectedAnswer === sampleQuestions[currentQuestion].correct ? 'bg-emerald-50 ring-emerald-200 text-emerald-800' : 'bg-red-50 ring-red-200 text-red-800'}`}>
                          <div className="font-bold flex items-center gap-2 mb-2">
                            {selectedAnswer === sampleQuestions[currentQuestion].correct ? (
                              <><CheckCircle2 className="w-5 h-5" /> Jawaban Anda Benar!</>
                            ) : (
                              <><AlertCircle className="w-5 h-5" /> Jawaban Anda Salah!</>
                            )}
                          </div>
                          <p className="text-sm font-medium leading-relaxed opacity-90">
                            {sampleQuestions[currentQuestion].explanation}
                          </p>
                        </div>
                        <button 
                          onClick={nextQuestion}
                          className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                        >
                          {currentQuestion < sampleQuestions.length - 1 ? 'Soal Selanjutnya' : 'Lihat Hasil Akhir'}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                      <Trophy className="w-12 h-12 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulasi Selesai!</h2>
                    <p className="text-slate-600 mb-8">Anda telah menyelesaikan sesi latihan soal.</p>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 ring-1 ring-slate-200 inline-block text-left w-full max-w-sm mx-auto mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-500 font-medium">Skor Anda</span>
                        <span className="text-2xl font-bold text-blue-700">{Math.round((score / sampleQuestions.length) * 100)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Jawaban Benar</span>
                        <span className="font-bold text-slate-900">{score} dari {sampleQuestions.length}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 transition-colors"
                      >
                        Kembali ke Dashboard
                      </button>
                      <button 
                        onClick={restartQuiz}
                        className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-200"
                      >
                        Ulangi Latihan
                      </button>
                    </div>
                  </div>
                )}
              </div>
              </div>
              
              <div>
                <FocusTimer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Temporary icon component for History since it was missing
function History(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}
