import thumbnail from '../../assets/images/projects/marketplace-mvp.png';
import userFlow from '../../assets/images/projects/marketplace-mvp/user-flow.png';
import variables from '../../assets/images/projects/marketplace-mvp/variables.webp';
import components from '../../assets/images/projects/marketplace-mvp/components.webp';
import wireframe01 from '../../assets/images/projects/marketplace-mvp/wireframe-01.png';
import wireframe02 from '../../assets/images/projects/marketplace-mvp/wireframe-02.png';
import wireframe03 from '../../assets/images/projects/marketplace-mvp/wireframe-03.png';
import wireframe04 from '../../assets/images/projects/marketplace-mvp/wireframe-04.png';
import concept01 from '../../assets/images/projects/marketplace-mvp/concept-01.webp';
import concept02 from '../../assets/images/projects/marketplace-mvp/concept-02.webp';
import concept03 from '../../assets/images/projects/marketplace-mvp/concept-03.webp';
import concept04 from '../../assets/images/projects/marketplace-mvp/concept-04.webp';
import concept05 from '../../assets/images/projects/marketplace-mvp/concept-05.webp';
import concept06 from '../../assets/images/projects/marketplace-mvp/concept-06.webp';
import concept07 from '../../assets/images/projects/marketplace-mvp/concept-07.webp';
import concept08 from '../../assets/images/projects/marketplace-mvp/concept-08.webp';
import type { Project } from './types';

export const marketplaceMvp: Project = {
  slug: 'marketplace-mvp',
  title: 'MVP Маркетплейса',
  description: [
    'Я спроектировала приложение с нуля в рамках учебного проекта. По итогу разработаны более 60+ экранов продукта в светлой и тёмной темах (всего 120+ экранов).',
    'Работа велась по полному циклу дизайн-процесса, близкому к реальной продуктовой разработке: от аналитики и постановки задач до финального UI.',
  ],
  tags: ['Mobile App', 'B2B', 'UX/UI design'],
  thumbnail,

  pageTitle: 'Маркетплейс MVP',
  meta: {
    tags: 'mobile app, ux/ui design, b2c',
    about: 'MVP мобильного приложения для маркетплейса одежды (учебный проект)',
  },
  sections: [
    {
      title: 'Моя роль',
      blocks: [
        {
          list: [
            'Спроектировала интерфейс маркетплейса одежды «с нуля» до финальных макетов.',
            'Обосновывала решения данными исследований и бенчмаркингом конкурентов.',
            'Подготовила интерактивные прототипы и детализированный дизайн для iOS.',
            'Собрала масштабируемый UI-кит, упрощающий дальнейшую разработку.',
            'Улучшала продукт на основе тестов и фидбека реальных пользователей.',
            'Инструменты: Figma, Midjourney, Photoshop, ChatGPT',
          ],
        },
      ],
    },
    {
      title: 'Результаты работы',
      blocks: [
        {
          paragraphs: [
            'В результате работы было создано 120+ экранов: 60+ уникальных экранов в темной и светлой темах, а также разработана основная часть дизайн-системы.',
          ],
        },
      ],
    },
  ],
  gallery: [
    [
      { caption: 'User Flow', layout: 'single', images: [{ src: userFlow, width: 369, height: 204 }] },
      {
        caption: 'Дизайн-система | Variables',
        layout: 'single',
        images: [{ src: variables, width: 370, height: 246 }],
      },
      {
        caption: 'Дизайн-система | Компоненты',
        layout: 'single',
        images: [{ src: components, width: 370, height: 175 }],
      },
      {
        caption: 'Вайрфреймы',
        layout: 'grid',
        images: [wireframe01, wireframe02, wireframe03, wireframe04].map((src) => ({
          src,
          width: 179,
          height: 368,
          fit: 'contain' as const,
        })),
      },
      {
        caption: 'Визуальная концепция',
        layout: 'grid',
        images: [
          concept01,
          concept02,
          concept03,
          concept04,
          concept05,
          concept06,
          concept07,
          concept08,
        ].map((src) => ({ src, width: 179, height: 368 })),
      },
    ],
  ],
};
