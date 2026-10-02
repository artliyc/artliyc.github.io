export const navItems = [
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'testimonials', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
] as const;

export const languages = [
  { locale: 'ru', label: 'RUS', href: '/' },
  { locale: 'en', label: 'ENG', href: '/en/' },
] as const;
