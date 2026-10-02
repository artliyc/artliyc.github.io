import { url } from '../utils/url';

export const navItems = [
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'testimonials', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
] as const;

export const languages = [
  { locale: 'ru', label: 'RUS', href: url('/') },
  { locale: 'en', label: 'ENG', href: url('/en/') },
] as const;
