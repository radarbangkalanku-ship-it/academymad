export interface Competition {
  id: string;
  title: string;
  category: string;
  date: string;
  prize: string;
  status: 'Pendaftaran Buka' | 'Sedang Berlangsung' | 'Selesai';
  participants: number;
  level?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  school: string;
  content: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Achiever {
  id: string;
  name: string;
  school: string;
  medal: 'Emas' | 'Perak' | 'Perunggu';
  competition: string;
  imagePlaceholderId: number;
}

export interface Partner {
  id: string;
  name: string;
}
