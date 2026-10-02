import type { ImageMetadata } from 'astro';
import aliensZombiesRobots from '../assets/images/projects/aliens-zombies-robots.png';
import redoc from '../assets/images/projects/redoc.png';
import farManor from '../assets/images/projects/far-manor.png';
import nda from '../assets/images/projects/nda.png';
import marketplaceMvp from '../assets/images/projects/marketplace-mvp.png';
import avenueRose from '../assets/images/projects/avenue-rose.png';

export interface Project {
  slug: string;
  title: string;
  description: string[];
  tags: string[];
  thumbnail: ImageMetadata;
  /**
   * Crop of the thumbnail inside its 330×260 slot, in percent of the slot
   * (taken from the Figma image fill). Omitted when the image simply covers it.
   */
  crop?: { top: number; left: number; width: number; height: number };
}

export const projects: Project[] = [
  {
    slug: 'aliens-zombies-robots',
    title: 'Aliens, Zombies, Robots',
    description: [
      'Мобильная игра инди-разработчика, находящаяся на этапе открытого бета-тестирования.',
      'В проекте я работала над интерфейсами и элементами игры в составе небольшой команды в условиях строгих ограничений.',
      'Разработала ключевые экраны, поп-апы, а также создала нейроиллюстрации для промо.',
    ],
    tags: ['Game Interface', 'Mobile', 'B2C', 'UX/UI design'],
    thumbnail: aliensZombiesRobots,
  },
  {
    slug: 'redoc',
    title: 'Re:Doc',
    description: [
      'Я переработала два экрана для этой региональной платформы госуслуг, чтобы исследовать возможность внедрения геймифицированного интерфейса в данный проект.',
      'В ходе исследования проверялась гипотеза о том, может ли геймифицированный интерфейс эффективно снизить усталость от рутинных задач и повысить вовлеченность операторов платформы в долгосрочной перспективе.',
    ],
    tags: ['Saas', 'B2B', 'Gamification', 'UX/UI design'],
    thumbnail: redoc,
    crop: { top: 0.07, left: 0.08, width: 148.06, height: 99.93 },
  },
  {
    slug: 'far-manor',
    title: 'Far Manor',
    description: [
      'Редизайн интерфейса игры инди-разработчика. Механики опережали интерфейс: сильные системы подавались без обратной связи, игрок не понимал, что происходит.',
      'Переработала ключевые экраны, собрала дизайн-систему. Собрала параметры в группы и развела их по вкладкам. Благодаря такой переработке в игре появились видимые состояния, счётчики прогресса и явные условия.',
    ],
    tags: ['Web', 'Game Interface', 'B2C', 'UX/UI design'],
    thumbnail: farManor,
    crop: { top: 0, left: -0.12, width: 140.02, height: 100 },
  },
  {
    slug: 'nda',
    title: 'NDA',
    description: [
      'Визуальная новелла инди-разработчика в жанре интерактивных историй, ориентированная на мобильные девайсы.',
      'Проект в стадии разработки, я отвечаю полностью за интерфейс: ключевые экраны игры, масштабируемая дизайн-система. На сегодняшний день спроектировала UI читалки, каталог и карточку истории. Выстраиваю единый визуальный язык в футуристическом стиле.',
    ],
    tags: ['Web', 'Mobile', 'Game Interface', 'B2C', 'UX/UI design'],
    thumbnail: nda,
  },
  {
    slug: 'marketplace-mvp',
    title: 'MVP Маркетплейса',
    description: [
      'Я спроектировала приложение с нуля в рамках учебного проекта. По итогу разработаны более 60+ экранов продукта в светлой и тёмной темах (всего 120+ экранов).',
      'Работа велась по полному циклу дизайн-процесса, близкому к реальной продуктовой разработке: от аналитики и постановки задач до финального UI.',
    ],
    tags: ['Mobile App', 'B2B', 'UX/UI design'],
    thumbnail: marketplaceMvp,
  },
  {
    slug: 'avenue-rose',
    title: 'Авеню Розе',
    description: [
      'Концептуальный проект, разработанный для компании, специализирующейся на сезонных игровых активациях для брендов.',
      'Разработала концепцию геймифицированного опыта для ритейл-бренда с целью привлечения молодой аудитории и стимулирования покупок в офлайн-магазинах.',
    ],
    tags: ['Mobile', 'Game Interface', 'B2C', 'UX/UI design'],
    thumbnail: avenueRose,
    crop: { top: -1.02, left: -3.76, width: 107.41, height: 102.49 },
  },
];
