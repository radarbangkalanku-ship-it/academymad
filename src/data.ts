import { Competition, Feature, Stat, Testimonial, FAQ, Achiever, Partner } from './types';

export const competitions: Competition[] = [
  {
    id: '1',
    title: 'Olimpiade Sains Nasional Ke-15',
    category: 'Biologi, Fisika, Kimia',
    date: '15 Agustus 2026',
    prize: 'Medali & Uang Pembinaan',
    status: 'Pendaftaran Buka',
    participants: 1250,
    level: 'SMA/MA',
  },
  {
    id: '2',
    title: 'Kompetisi Matematika Terapan',
    category: 'Matematika',
    date: '28 Agustus 2026',
    prize: 'Sertifikat & Medali',
    status: 'Pendaftaran Buka',
    participants: 840,
    level: 'SMP/MTs',
  },
  {
    id: '3',
    title: 'Olimpiade Kedokteran Dasar',
    category: 'Kedokteran',
    date: '10 September 2026',
    prize: 'Beasiswa & Medali',
    status: 'Pendaftaran Buka',
    participants: 2100,
    level: 'SMA/MA',
  },
];

export const features: Feature[] = [
  {
    id: 'f1',
    title: 'Computer Based Test (CBT)',
    description: 'Sistem ujian CBT yang canggih, aman, dan anti-kecurangan dengan monitoring real-time.',
    iconName: 'monitor'
  },
  {
    id: 'f2',
    title: 'Sertifikat Barcode Resmi',
    description: 'Setiap peserta mendapatkan e-sertifikat tingkat nasional dengan kode verifikasi unik.',
    iconName: 'award'
  },
  {
    id: 'f3',
    title: 'Medali & Piagam Cetak',
    description: 'Fasilitas pengiriman medali fisik dan piagam penghargaan eksklusif ke seluruh Indonesia.',
    iconName: 'medal'
  },
  {
    id: 'f4',
    title: 'Soal Berstandar HOTS',
    description: 'Kualitas soal disusun oleh praktisi dan akademisi berpengalaman untuk menguji nalar.',
    iconName: 'brain'
  },
];

export const stats: Stat[] = [
  { label: 'Peserta Aktif', value: '150', suffix: 'k+' },
  { label: 'Sekolah Bergabung', value: '2', suffix: 'k+' },
  { label: 'Kompetisi Sukses', value: '300', suffix: '+' },
  { label: 'Penerima Medali', value: '45', suffix: 'k+' },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Budi Santoso',
    role: 'Guru Pembimbing',
    school: 'SMA Negeri 1 Jakarta',
    content: 'Madura Academy sangat membantu sekolah kami dalam mengukur kemampuan siswa di tingkat nasional. Sistem CBT-nya sangat stabil dan bebas kecurangan.',
  },
  {
    id: 't2',
    name: 'Siti Aminah',
    role: 'Peraih Medali Emas Biologi',
    school: 'SMA Taruna Nusantara',
    content: 'Soal-soal yang disajikan sangat menantang dan benar-benar menguji nalar (HOTS). Pengalaman yang luar biasa bisa berkompetisi di Madura Academy!',
  },
  {
    id: 't3',
    name: 'Ahmad Fauzi',
    role: 'Siswa Kelas 11',
    school: 'MAN 2 Kota Malang',
    content: 'Berkat sertifikat dari Madura Academy, saya mendapat poin tambahan untuk pendaftaran beasiswa. Sangat direkomendasikan untuk pelajar di seluruh Indonesia.',
  },
  {
    id: 't4',
    name: 'Rina Wijayanti',
    role: 'Orang Tua Siswa',
    school: 'SMA 5 Surabaya',
    content: 'Saya sangat bangga anak saya bisa meraih medali nasional. Pengiriman medalinya cepat dan kualitas sertifikatnya sangat memuaskan.',
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'Bagaimana cara mendaftar kompetisi?',
    answer: 'Anda dapat mendaftar dengan membuat akun terlebih dahulu melalui tombol "Daftar Sekarang", lalu pilih kompetisi yang sedang buka pada menu Jadwal Kompetisi dan ikuti instruksi pembayaran.'
  },
  {
    id: 'faq2',
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima berbagai metode pembayaran termasuk Bank Transfer (Virtual Account), e-Wallet (OVO, GoPay, Dana, ShopeePay), dan pembayaran melalui minimarket (Alfamart/Indomaret).'
  },
  {
    id: 'faq3',
    question: 'Apakah sertifikat bisa digunakan untuk pendaftaran SNBP/Beasiswa?',
    answer: 'Ya, sertifikat Madura Academy dilengkapi dengan barcode unik yang terverifikasi secara nasional, sehingga diakui dan dapat digunakan untuk melampirkan prestasi pada pendaftaran PTN atau beasiswa.'
  },
  {
    id: 'faq4',
    question: 'Bagaimana sistem ujiannya berlangsung (CBT)?',
    answer: 'Ujian dilakukan secara online melalui browser di perangkat Anda (laptop/PC/smartphone). Sistem kami dilengkapi dengan pengawasan real-time otomatis untuk mencegah kecurangan.'
  },
  {
    id: 'faq5',
    question: 'Apakah medali fisik dikirimkan ke rumah?',
    answer: 'Ya, bagi peserta yang meraih juara dan memenuhi kriteria medali (Emas, Perak, Perunggu), medali dan piagam fisik akan dikirimkan langsung ke alamat rumah sekolah peserta yang didaftarkan.'
  }
];

export const achievers: Achiever[] = [
  {
    id: 'a1',
    name: 'M. Rizky Saputra',
    school: 'SMA Taruna Nusantara',
    medal: 'Emas',
    competition: 'Olimpiade Sains Nasional',
    imagePlaceholderId: 1,
  },
  {
    id: 'a2',
    name: 'Nadia Salsabila',
    school: 'SMAN 8 Jakarta',
    medal: 'Perak',
    competition: 'Olimpiade Matematika',
    imagePlaceholderId: 2,
  },
  {
    id: 'a3',
    name: 'Kevin Jonathan',
    school: 'SMAK BPK Penabur',
    medal: 'Emas',
    competition: 'Kompetisi Fisika',
    imagePlaceholderId: 3,
  },
  {
    id: 'a4',
    name: 'Aisyah Putri',
    school: 'MAN Insan Cendekia',
    medal: 'Perunggu',
    competition: 'Olimpiade Biologi',
    imagePlaceholderId: 4,
  }
];

export const partners: Partner[] = [
  { id: 'p1', name: 'Kementerian Pendidikan' },
  { id: 'p2', name: 'Pusat Prestasi Nasional' },
  { id: 'p3', name: 'Universitas Indonesia' },
  { id: 'p4', name: 'Institut Teknologi Bandung' },
  { id: 'p5', name: 'Universitas Gadjah Mada' },
  { id: 'p6', name: 'Ruangguru' },
];