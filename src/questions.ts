export const sampleQuestions = [
  {
    id: 1,
    subject: 'Matematika SMA',
    question: 'Jika x + y = 10 dan x - y = 4, berapakah nilai x dan y?',
    options: ['x = 7, y = 3', 'x = 6, y = 4', 'x = 8, y = 2', 'x = 5, y = 5'],
    correct: 0,
    explanation: 'Penjelasan: Gunakan metode eliminasi. (x + y) + (x - y) = 10 + 4 => 2x = 14 => x = 7. Substitusikan (7) + y = 10 => y = 3.'
  },
  {
    id: 2,
    subject: 'Fisika SMA',
    question: 'Sebuah benda bermassa 2 kg jatuh bebas dari ketinggian 20 m. Berapa energi kinetik benda saat menyentuh tanah? (g = 10 m/s²)',
    options: ['200 J', '400 J', '100 J', '50 J'],
    correct: 1,
    explanation: 'Penjelasan: Berdasarkan hukum kekekalan energi mekanik, EK maksimal (saat menyentuh tanah) sama dengan EP maksimal (di ketinggian awal). EP = m × g × h = 2 × 10 × 20 = 400 J.'
  }
];

// Generate the remaining questions up to 100
for (let i = sampleQuestions.length; i < 100; i++) {
  sampleQuestions.push({
    id: i + 1,
    subject: i % 2 === 0 ? 'Matematika SMA' : 'Fisika SMA',
    question: `Soal Latihan Simulasi - Nomor ${i + 1}. Berdasarkan konsep dasar akademik, manakah pernyataan yang paling tepat terkait permasalahan ini?`,
    options: [
      `Jawaban spekulatif A untuk soal nomor ${i + 1}`, 
      `Jawaban spekulatif B untuk soal nomor ${i + 1}`, 
      `Jawaban spekulatif C (Asumsi Logis)`, 
      `Jawaban spekulatif D untuk soal nomor ${i + 1}`
    ],
    correct: Math.floor(Math.random() * 4),
    explanation: `Penjelasan untuk soal nomor ${i + 1}. Jawaban yang benar didapatkan dari penerapan rumus standar.`
  });
}
