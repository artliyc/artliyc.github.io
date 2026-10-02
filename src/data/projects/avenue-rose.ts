import thumbnail from '../../assets/images/projects/avenue-rose.png';
import screen01 from '../../assets/images/projects/avenue-rose/01.png';
import screen02 from '../../assets/images/projects/avenue-rose/02.png';
import screen03 from '../../assets/images/projects/avenue-rose/03.png';
import type { Project } from './types';

export const avenueRose: Project = {
  slug: 'avenue-rose',
  title: 'Авеню Розе',
  description: [
    'Концептуальный проект, разработанный для компании, специализирующейся на сезонных игровых активациях для брендов.',
    'Разработала концепцию геймифицированного опыта для ритейл-бренда с целью привлечения молодой аудитории и стимулирования покупок в офлайн-магазинах.',
  ],
  tags: ['Mobile', 'Game Interface', 'B2C', 'UX/UI design'],
  thumbnail,
  crop: { top: -1.02, left: -3.76, width: 107.41, height: 102.49 },

  company: 'DL Games',
  meta: {
    tags: 'game interface, ux/ui design, B2C',
    about:
      'Концептуальный проект, разработанный для компании, специализирующейся на сезонных игровых активациях для брендов.',
  },
  sections: [
    {
      title: 'Моя роль',
      blocks: [
        {
          list: [
            'Разработка концепции игры на основе механики Block Puzzle с системой, включающей комбо-награды, еженедельный рейтинг и нарративный слой с персонажем',
            'Проведение конкурентного анализа',
            'Проработка информационной архитектуры',
            'Создание вайрфреймов',
            'UI дизайн нескольких экранов и формирование компонентов дизайн-системы',
            'Генерация и доработка иллюстраций с помощью нейросетей',
            'Инструменты: Figma, Nano Banana, Gemini, Claude Design, Photoshop',
          ],
        },
      ],
    },
    {
      title: 'Результаты работы',
      blocks: [
        {
          list: [
            'Разработала игровую концепцию для бренда: механики вовлечения, прогрессию и систему наград, ориентированные на молодую аудиторию и стимулирование офлайн-покупок.',
            'Проработала структуру приложения, пользовательские сценарии и engagement-механики, органично встраивающие знакомство с ассортиментом бренда в игровой процесс.',
            'Разработала UI и базовые компоненты дизайн-системы',
          ],
        },
      ],
    },
  ],
  gallery: [
    [
      {
        caption: 'Экраны',
        layout: 'list',
        images: [screen01, screen02, screen03].map((src) => ({ src, width: 289, height: 628 })),
        desktop: { width: 289, height: 628, gap: 25 },
      },
    ],
  ],
};
